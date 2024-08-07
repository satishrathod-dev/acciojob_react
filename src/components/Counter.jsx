import React, { useState } from "react";

// const Counter = () => {
function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <button
        className="btn"
        onClick={handleDecrease}
        style={{ margin: "10px" }}
      >
        -
      </button>
      <span id="countVariable">{count}</span>
      <button
        className="btn"
        onClick={handleIncrease}
        style={{ margin: "10px" }}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
