import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents.js";
import WelcomeScreen from "./WelcomeScreen";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import "./nprogress.css";
import { InfoAlert } from "./Alert";

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 32,
    selectedLocation: "all",
    showWelcomeScreen: undefined,
  };

  updateNumberOfEvents(number) {
    this.setState({
      numberOfEvents: number,
    });
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    let goGetEvents;
    if (navigator.onLine) {
      const isTokenValid = (await checkToken(accessToken)).error ? false : true;
      const searchParams = new URLSearchParams(window.location.search);
      const code = searchParams.get("code");
      this.setState({ showWelcomeScreen: !(code || isTokenValid) });
      goGetEvents = (code || isTokenValid) && this.mounted;
    } else {
      goGetEvents = accessToken && this.mounted;
      this.setState({ showWelcomeScreen: false });
    }

    if (goGetEvents) {
      getEvents().then((events) => {
        if (this.mounted) {
          events = events.slice(0, this.state.eventCount);
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }
  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, inputs) => {
    const { eventCount, seletedLocation } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents =
          location === "all"
            ? events
            : events.filter((event) => event.location === location);
        const eventsToShow = locationEvents.slice(0, eventCount);
        this.setState({
          events: eventsToShow,
          seletedLocation: location,
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents =
          seletedLocation === "all"
            ? events
            : events.filter((event) => event.location === seletedLocation);
        const eventsToShow = locationEvents.slice(0, inputs);
        this.setState({
          events: eventsToShow,
          eventCount: inputs,
        });
      });
    }
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;

    return (
      <div className="App">
        {!navigator.onLine && (
          <InfoAlert
            className="alert-info"
            text="It seems you are currently offline. You are viewing your cached data."
          />
        )}
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          num={this.state.numberOfEvents}
          updateNumberOfEvents={(num) => this.updateNumberOfEvents(num)}
        />
        <EventList events={this.state.events} />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
