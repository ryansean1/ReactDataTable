import React from "react";
import Child from "./Circle";

export default class Filterbox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberProviders: 10,
    };
  }

  handleNumber = () => {
    console.log("Number ", this.state.numberProviders);
    this.setState({ numberProviders: this.state.numberProviders });
  };

  render() {
    return (
      <div className="Filterbox">
        <div className="Circle">
          <Child providers={this.handleNumber} />
        </div>
        <div className="Filterboxtext">
          <br></br>
          <titletext>Providers</titletext>
        </div>
        <div className="Filterboxtext1">
          <titletext>Active May-Jul 2020</titletext>
        </div>
      </div>
    );
  }
}
