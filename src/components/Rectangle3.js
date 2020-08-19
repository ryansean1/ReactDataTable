import React from "react";
import ActiveProviders from "./components/Tables/ActiveProviders";

export default class Filterbox1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberProviders: 0,
    };
  }

  render() {
    return (
      <div className="Filterbox">
        <div>
          <ActiveProviders />
        </div>
      </div>
    );
  }
}
