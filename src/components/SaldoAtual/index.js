import React from "react";
import { Card, Button } from "react-bootstrap";
import Emoji from "../../components/emoji";

export default function SaldoAtual({ history }) {
  function onClick(event) {
    event.preventDefault();
    history.push("/");
  }

  return (
    <>
      <Card bg="light" className="text-center" style={{ width: "18rem" }}>
        <Emoji label="saldo" symbol="💰" />
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

