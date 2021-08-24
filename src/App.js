import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Crypto from "./components/card/Crypto";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Crypto />
      </div>
    </>
  );
}

export default App;
