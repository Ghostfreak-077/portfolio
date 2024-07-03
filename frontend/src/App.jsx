import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Page from "./Page";
import contextVar from "./ContextFile";

function App() {

  const server_url = 'http://localhost:1337'

  return (
    <>
      <contextVar.Provider value={{server_url, token:"ee7c05652c00483137a7c864b98678aee76f89356a2708969c09f0c99d5e05add9f4590c7cd1cd033a12f3279f8ee6b78ea76702f670d513cff9938dc822caaa254dfd65406ebf1e4b959d9c10657c1526dc2800ca50d077e6971c0df82cfc556580c463446bba9459eda88db2d3b20781ee9bce5e84b6f089eb23a90351dc39"}}>
        <Page />
      </contextVar.Provider>
    </>
  );
}

export default App;
