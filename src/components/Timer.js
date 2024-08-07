import React, { useState, useEffect } from "react";

const Timer = () => {
  const [Counter, setCounter] = useState(0);
  //   const [calculation, setCalculation] = useState(0);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCounter(Counter + 1);
  //     }, 1000);
  //   }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCounter((Counter) => Counter + 1);
    }, 1000);
    // Note: To clear the timer, we had to name it.
    return () => clearTimeout(timer);
  }, []);

  //setCalculation is dependent on the counter state
  //   useEffect(() => {
  //     setCalculation(() => Counter * 2);
  //   }, [Counter]);

  //   console.log(Counter);
  //   const handleIncrease = () => {
  //     setCounter(Counter + 1);
  //   };

  return (
    <div>
      {/* <p>{Counter}:</p> */}
      {/* <button onClick={() => setCounter((c) => c + 1)}> + </button> */}
      {/* <p>Calculation: {calculation}</p> */}
      {/* <button onClick={handleIncrease}>{Counter}</button> */}
      <h1>I have rendered {Counter} this time!</h1>
    </div>
  );
};

export default Timer;
