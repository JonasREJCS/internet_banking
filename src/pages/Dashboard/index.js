import React from "react";
// import SaldoAtual from "../../components/SaldoAtual/index";
import "./index.css";

import { Card, Button, CardDeck } from "react-bootstrap";

export default function Dashboard({ history }) {
  const usuario = localStorage.getItem("user");

  function onClick(event) {
    event.preventDefault();
    history.push("/extrato");
  }

  return (
    <>
      <p>Bem vindo, {usuario} !</p>
      <CardDeck>
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
        <Card bg="light" className="text-center" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Cartão de Crédito</Card.Title>
            <Card.Subtitle>Em breve você poderá solicitar nosso cartão de crédito</Card.Subtitle>
            <img alt="visa logo" width="50px" src={require('../../assets/visa_logo.jpg')} />
            <img alt="mastercard logo" width="50px" src={require('../../assets/mastercard_logo.jpg')} />
            <Button variant="dark" disabled="disabled">
              Solicitar Cartão (DISPONÍVEL EM BREVE)
            </Button>
          </Card.Body>
        </Card>
        </CardDeck>
    </>
  );
}
