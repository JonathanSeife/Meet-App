import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test("render event summary", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
  });

  test("render summary of event correctly", () => {
    expect(EventWrapper.find(".summary").text()).toBe(event.summary);
  });

  test("render information of event", () => {
    expect(EventWrapper.find(".information")).toHaveLength(1);
  });

  test("render information of event correctly", () => {
    expect(EventWrapper.find(".information").text()).toBe(
      `${event.start.dateTime} ${event.start.timeZone} ${event.location}`
    );
  });

  test("Do not render details by default", () => {
    expect(EventWrapper.find(".details")).toHaveLength(0);
  });

  test("Render button shows details when hidden", () => {
    EventWrapper.find(".show-details").at(0).simulate("click");
    expect(EventWrapper.find(".details")).toHaveLength(1);
  });

  test("render button hides details when details visible", () => {
    EventWrapper.setState({ detailsVisible: true });
    expect(EventWrapper.find(".hide-details")).toHaveLength(1);
  });

  test("Do not render details when hide details button is clicked", () => {
    EventWrapper.setState({ detailsVisible: true });
    EventWrapper.find(".hide-details").at(0).simulate("click");
    expect(EventWrapper.find(".details")).toHaveLength(0);
  });
});
