import { useEffect, useState } from "react";

const createStore = (initialState = {}) => {
  let state = initialState;
  const subscribers = [];

  const getState = () => state;

  const updateState = (newState) => {
    state = { ...state, ...newState };
    subscribers.forEach((subscriber) => subscriber(state));
  };

  const subscribe = (callback) => {
    subscribers.push(callback);
    return () => {
      const index = subscribers.indexOf(callback);
      if (index !== -1) subscribers.splice(index, 1);
    };
  };

  return { getState, updateState, subscribe };
};

// hook that subscribes and updates the child component.
const useCustomeState = (store) => {
  const [state, setState] = useState(store.getState());

  // this function is passed as the callback to subscribe function
  const handleStateChange = (newState) => {
    setState(newState);
  };

  // run the side effect on the state
  useEffect(() => {
    const unsubscribe = store.subscribe(handleStateChange);
    return () => {
      unsubscribe();
    };
  }, []);

  return { state, setState };
};
export { createStore, useCustomeState };
