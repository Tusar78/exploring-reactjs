// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./Components/Countries/Countries";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Countries></Countries>
    </>
  );
}

export default App;
