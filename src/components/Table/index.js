import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transacoes: [
        { id: 1, tipoTransacao: "Depósito", valor: 120000, data: "20 nov" },
        { id: 2, tipoTransacao: "Saque", valor: -2000, data: "21 nov" },
        {
          id: 3,
          tipoTransacao: "Transferência enviada",
          valor: -9000,
          data: "22 nov"
        },
        { id: 4, tipoTransacao: "Débito", valor: -500, data: "23 nov" },
        {
          id: 5,
          tipoTransacao: "Transferência Recebida",
          valor: 7000,
          data: "20 nov"
        },
        { id: 6, tipoTransacao: "Boleto Pago", valor: -1500, data: "21 nov" },
        {
          id: 7,
          tipoTransacao: "Transferência enviada",
          valor: -1400,
          data: "22 nov"
        },
        { id: 8, tipoTransacao: "Débito", valor: -1365, data: "23 nov" }
      ]
    };
  }

  renderTableData() {
    return this.state.transacoes.map(transacao => {
      const { id, valor, tipoTransacao, data } = transacao; //destructuring
      return (
        <tr key={id}>
          <td id="parent_div_1">
            <div className="child_div_1">{tipoTransacao}</div>
            <div className="child_div_2">{data}</div>
          </td>
          <div className="valor">R$ {valor}</div>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table id="extrato">
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
