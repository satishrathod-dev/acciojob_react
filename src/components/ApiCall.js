import React, { useState } from "react";
import axios from "axios";

const ApiCall = () => {
  const [post, setPost] = useState(null);
  const api = "https://reqres.in/api/users";
  const getdata = async () => {
    const data = await axios.get(api);
    console.log(data);
    setPost(data);
  };
  return (
    <div>
      <h1>News Api</h1>
      <button onClick={getdata}>Link</button>
    </div>
  );
};

export default ApiCall;
