import React from "react";
import SaldoAtual from "../../components/SaldoAtual/index";

export default function Dashboard({ history }) {
  const usuario = localStorage.getItem("user");

  return (
    <>
      <p1>Bem vindo, {usuario} !</p1>
      <SaldoAtual />
    </>
  );
}
