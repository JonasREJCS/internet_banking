import React from "react";
import Emoji from "../../components/emoji";
import "./index.css";
import Table from "../../components/Table";

export default function Extrato({ history }) {
  return (
    <div>
      <p>Seu extrato</p>
      <p>
        <Emoji label="extrato" symbol="📜" />
      </p>
      <Table></Table>
    </div>
  );
}
