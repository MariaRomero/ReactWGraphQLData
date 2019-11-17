import React from "react";
import { shallow } from "enzyme";
import { MockedProvider } from "@apollo/react-testing";
import App from "./App";

it("renders without crashing", () => {
  const component = (
    <MockedProvider>
      <App />
    </MockedProvider>
  );
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();
});
