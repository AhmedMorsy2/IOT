import React from "react";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Login />
    </>
  );
}
