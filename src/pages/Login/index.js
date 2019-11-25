import React, { useState } from "react";
import Emoji from "../../components/emoji/index";

export default function Login({ history }) {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (usuario === "JonasREJCS" && senha === "1234") {
      localStorage.setItem("user", usuario);
      history.push('/dashboard')
    } else window.alert('Usuário/Senha inválida!')

  }

  return (
    <>
      <p>Efetue operações bancárias com simplicidade</p>

      <p>
        <Emoji label="sheep" symbol="🌐💰" />
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="usuario">Usuário *</label>
        <input
          type="user"
          id="usuario"
          placeholder="Digite seu usuário"
          value={usuario}
          onChange={event => setUsuario(event.target.value)}
        />
        <label htmlFor="senha">Senha *</label>
        <input
          type="password"
          id="senha"
          placeholder="Digite sua senha"
          value={senha}
          onChange={event => setSenha(event.target.value)}
        />
        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
}
