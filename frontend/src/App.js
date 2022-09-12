import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [username, setUserName] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("/names");
    setUserName(response.data);
  };

  return (
    <>
      <h1>My Website</h1>
      <h3>My name is {username}</h3>
    </>
  );
}

export default App;
