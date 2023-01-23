import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numEvents: 32,
    errorText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        errorText: "Enter number from 1 to 32",
      });
    } else {
      this.props.updateEvents(null, value);
      this.setState({
        eventCount: value,
        infoText: "",
      });
    }
  };

  render() {
    return (
      <div>
        <label>
          Number of events
          <input
            type="number"
            id="number-of-events"
            className="number"
            min="1"
            value={this.state.eventCount}
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
