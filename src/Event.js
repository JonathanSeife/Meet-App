import React, { Component } from "react";

class Event extends Component {
  state = {
    detailsVisible: false,
  };

  handleDetailsToggled = () => {
    if (!this.state.detailsVisible) {
      this.setState({
        detailsVisible: true,
      });
    } else {
      this.setState({
        detailsVisible: false,
      });
    }
  };

  render() {
    console.log("Hello");
    const { event } = this.props;
    return (
      <div className="event">
        <h2 className="summary">{event.summary}</h2>
        <p className="information">
          {event.start.dateTime} {event.start.timeZone} {event.location}
        </p>
        {this.state.detailsVisible ? (
          <>
            <div className="details">
              <h3 className="details-title">Event Info:</h3>
              <a href={event.htmlLink} className="details-link">
                See details
              </a>
              <p className="details-description">{event.description}</p>
            </div>
            <button
              className="hide-details"
              onClick={this.handleDetailsToggled}
            >
              Hide Details
            </button>
          </>
        ) : (
          <button className="show-details" onClick={this.handleDetailsToggled}>
            Show Details
          </button>
        )}
      </div>
    );
  }
}

export default Event;
