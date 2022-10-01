import React from "react";
import logo from "./logo.svg";
// import { useMoralis } from "react-moralis";
import "./App.css";
import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Mainpage />
        </div>
      </header>
    </div>
  );
}

export default App;
