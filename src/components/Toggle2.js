import React from "react";
import D3 from "./MapExamples/D3Map";
import MarketCon_Table from "./MarketConcentrationTable";
import ActiveParticipants from "./Tables/ActiveProviders";

export default class Toggle2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true, numberToCircle: 125454 };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
      isToggleOff: !prevState.isToggleOff,
    }));
  }

  handleCircle = () => {
    console.log("Circle ", this.state.numberToCircle);
    this.setState({ numberToCircle: this.state.numberToCircle });
  };

  render() {
    // const { stateList } = this.props.stateList;
    // const { filterVal } = this.props.filterVal;
    return (
      <div>
        {this.state.isToggleOn && (
          <div>
            <ActiveParticipants />
          </div>
        )}
        {this.state.isToggleOff && (
          <div>
            <D3 />
          </div>
        )}

        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? "MAP" : "TABLE"}
        </button>
      </div>
    );
  }
}
