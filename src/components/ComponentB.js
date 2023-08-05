import React from "react";
import { useCustomeState } from "../lib/customState";
import store from "../lib/store";

const ComponentB = () => {
  const { state } = useCustomeState(store);

  return (
    <div>
      <h2>Component B</h2>
      <p>Counter: {state.counter}</p>
    </div>
  );
};

export default ComponentB;
