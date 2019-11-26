import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { transacoes: [] };
  }

  componentDidMount() {
    fetch("https://5ddd54f0f40ae700141e91dd.mockapi.io/api/v1/transacoes")
      .then(res => res.json())
      .then(data => {
        this.setState({ transacoes: data });
      })
      .catch(console.log);
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
