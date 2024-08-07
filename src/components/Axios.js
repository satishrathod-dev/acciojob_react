import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import axios from "axios";

// const fetchURL = "https://reqres.in/api/users";

const App = () => {
  const [post, setPost] = useState(null);

  // useEffect(() => {
  //   const getData = axios.get(fetchURL).then((response) => {
  //     setPost(getData.data);
  //     console.log(getData.data);
  //   });
  // }, []);
  const getData = async () => {
    const response = await axios.get("https://reqres.in/api/users");
    console.log(response);
  };

  // if (!post)
  return <div></div>;
};

export default App;
