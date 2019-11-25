import React from "react";
import "./App.css";
import logo from "./assets/logo.svg"; 
import Routes from "./routes" 

function App() {
  return (
    <div className="container">
      <img src={logo} width="90px" height="90px" alt="Internet Banking" />
      <div className="content">
        <Routes>

        </Routes>
      </div>
    </div>
  );
}

export default App;
