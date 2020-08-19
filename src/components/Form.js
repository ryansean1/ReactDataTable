import React, { Component } from "react";

class StateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.states });
  }

  render() {
    const countires = require("./countries.json");
    return (
      <form>
        <label>
          LOCATION<br></br>
          <select>
            {countires.world.map((item) => (
              <option key={item.id} value={item.states}>
                {item.states}
              </option>
            ))}
          </select>
        </label>
      </form>
    );
  }
}

export default StateForm;
