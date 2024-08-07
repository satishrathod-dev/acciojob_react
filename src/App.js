// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Showroom from "./components/Showroom";
import Counter from "./components/Counter";
import Hooks from "./components/Hooks";
import Timer from "./components/Timer";
import ApiCall from "./components/ApiCall";
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef";
import { Axios } from "axios";
import ReduxCounter from "./components/ReduxCounter";

function App() {
  return (
    <>
      {/* <Header />
      <Content />
      <Footer />
      <Showroom /> */}
      {/* <Counter />
      <Hooks /> */}
      {/* <Timer /> */}
      {/* <ApiCall /> */}
      {/* <UseMemo /> */}
      {/* <UseRef /> */}
      {/* <Axios /> */}
      <ReduxCounter />
    </>
  );
}

export default App;
