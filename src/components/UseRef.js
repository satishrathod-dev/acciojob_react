import { useState, useEffect, useRef } from "react";

const UseRef = () => {
  //   const [inputValue, setInputValue] = useState("");
  //   const count = useRef(0);
  //   useEffect(() => {
  //     count.current = count.current + 1;
  //   }, []);
  //   return (
  //     <>
  //       <input
  //         type="text"
  //         value={inputValue}
  //         onChange={(e) => setInputValue(e.target.value)}
  //       />
  //       <h1>Render Count: {count.current}</h1>
  //     </>
  //   );
  // };
  const [myNum, setMyNum] = useState(0);

  const inputOne = useRef();
  const inputTwo = useRef();

  const getNumBox = () => {
    console.log("Hello Num");
    console.log(inputOne.current);
    inputOne.current.style.width = "400px";
  };
  const getTextBox = () => {
    console.log("Hello Text");
    console.log(inputTwo.current);
  };

  return (
    <>
      <h2>Learn useRef</h2>
      <input
        ref={inputOne}
        value={myNum}
        type="number"
        onChange={(e) => setMyNum(e.target.value)}
      />
      <input
        ref={inputTwo}
        value={myNum}
        type="text"
        onChange={(e) => setMyNum(e.target.value)}
      />
      <h3>Value is : {myNum}</h3>

      <button onClick={() => getNumBox()}>Ruppess</button>
      <button onClick={() => getTextBox()}>Dollars</button>
    </>
  );
};

export default UseRef;
