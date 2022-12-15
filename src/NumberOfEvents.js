import React, { Component } from "react";

export class NumberOfEvents extends Component {
  state = {
    numEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numEvents: value });
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
      </div>
    );
  }
}

export default NumberOfEvents;
