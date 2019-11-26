import React from "react";
// import SaldoAtual from "../../components/SaldoAtual/index";
import './index.css'

import { Card, Button } from "react-bootstrap";

export default function Dashboard({ history }) {
  const usuario = localStorage.getItem("user");

  function onClick(event) {
    event.preventDefault();
    history.push("/extrato");
  }

  return (
    <>
      <p>Bem vindo, {usuario} !</p>
      <Card bg="light" className="text-center" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Conta Corrente</Card.Title>
          <Card.Subtitle>Saldo disponível</Card.Subtitle>
          <Card.Text>R$ 25.000,00</Card.Text>
          <Button variant="primary" onClick={onClick}>
            Ver extrato
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
