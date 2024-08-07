import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useDispatch } from "react-redux";
import Count from "./Count";

const ReduxCounter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Tutorial</h1>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <Count />
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </div>
  );
};

export default ReduxCounter;
