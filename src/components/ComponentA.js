import React from "react";
import { useCustomeState } from "../lib/customState";
import store from "../lib/store";

const ComponentA = () => {
  const { state } = useCustomeState(store);

  const incrementCounter = () => {
    const newCounterValue = state.counter + 1;
    store.updateState({ counter: newCounterValue });
  };

  return (
    <div>
      <h2>Component A</h2>
      <p>Counter: {state.counter}</p>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
};

export default ComponentA;
