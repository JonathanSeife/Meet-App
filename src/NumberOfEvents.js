import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

export class NumberOfEvents extends Component {
  state = {
    numEvents: 32,
    errorText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: value,
        errorText: "Enter number from 1 to 32",
      });
    } else {
      this.setState({
        numberOfEvents: event.target.value,
        errorText: "",
      });
    }
    this.props.updateNumberOfEvents(value);
  };

  componentDidMount() {
    this.setState({ num: this.props.num || 32 });
  }
  render() {
    const { numEvents } = this.state;

    return (
      <div>
        <label>
          Number of events
          <input
            type="text"
            className="number"
            value={numEvents}
            onChange={this.handleInputChanged}
          />
        </label>
        <div>
          <ErrorAlert text={this.state.errorText} />
        </div>
      </div>
    );
  }
}

export default NumberOfEvents;
