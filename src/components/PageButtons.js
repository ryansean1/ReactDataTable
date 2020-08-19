import React, { Component } from "react";

export default class PageButtons extends Component {
  render() {
    console.log("This.Props,", this.props);
    return (
      <div>
        <button onClick={this.props.passValue} style={{ color: "Purple" }}>
          {" "}
          ACTIVE PROVIDERS{" "}
        </button>
        <button
          onClick={this.props.scrollToParticipant}
          style={{ color: "Purple" }}
        >
          {" "}
          PARTICIPANT DATA{" "}
        </button>
        <button onClick={this.props.scrollToMarket} style={{ color: "Purple" }}>
          {" "}
          MARKET CONCENTRATION{" "}
        </button>
        <button onClick={this.props.scrollToBudget} style={{ color: "Purple" }}>
          {" "}
          UTILISATION OF PLAN BUDGETS{" "}
        </button>
      </div>
    );
  }
}
