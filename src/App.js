import React from "react";
import "./App.css";
import CryptoCoin from "./components/card/CryptoCoin";
import Navbar from "./components/navbar/Navbar";
import "./components/font-awesome/index";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <CryptoCoin />
      </div>
    </>
  );
}

export default App;
