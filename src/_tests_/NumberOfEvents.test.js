import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("renders input for number of events", () => {
    expect(NumberOfEventsWrapper.find(".number")).toHaveLength(1);
  });
  test("render change for number of events to 10", () => {
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find(".number").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("numEvents")).toBe(10);
  });
});
