import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import Emoji from "./emoji/index";

function App() {
  function handleSubmit(event) {
    event.preventDefault()
    

  }

  return (
    <div className="container">
      <img src={logo} width="90px" height="90px" alt="Internet Banking" />
      <div className="content">
        <p>Efetue operações bancárias com simplicidade</p>

        <p>
          <Emoji label="sheep" symbol="🌐💰" />
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail *</label>
          <input 
            type="email"
            id="email"
            placeholder="Digite seu melhor email"
          />
          <button className="btn" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
