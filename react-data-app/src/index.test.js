import React from "react";
import Index from "./index";
import { shallow, configure } from "enzyme";
import { MockedProvider } from "@apollo/react-testing";

import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const client = jest.fn();
  const component = (
    <MockedProvider client={client}>
      <App />
    </MockedProvider>
  );
  const wrapper = shallow(component);
  expect(wrapper).toMatchSnapshot();
});
