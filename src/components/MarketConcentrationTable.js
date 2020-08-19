import React, { Component } from "react";

class MarketCon_Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      supportclasses: "",
      marketcon: [
        { id: 1, state: "NSW", supportclasses: "Sean", activeproviders: 50 },
        { id: 2, state: "TAS", supportclasses: "Adam", activeproviders: 50 },
        { id: 3, state: "QLD", supportclasses: "Greg", activeproviders: 50 },
        { id: 4, state: "VIC", supportclasses: "Richard", activeproviders: 50 },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.supportclasses });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.marketcon[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.state.marketcon.map((market, index) => {
      const { id, state, supportclasses, activeproviders } = market; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{state}</td>
          <td>{supportclasses}</td>
          <td>{activeproviders}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            support class:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="Sean">sean</option>
              <option value="Adam">adam</option>
              <option value="Greg">greg</option>
              <option value="mRichard">richard</option>
            </select>
          </label>
        </form>

        <p style={{ textAlign: "left" }} id="title">
          Service District Table
        </p>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MarketCon_Table;
