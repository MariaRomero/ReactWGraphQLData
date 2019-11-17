import React from "react";
import { shallow } from "enzyme";
import Pokemon from "./Pokemon";
import toJson from "enzyme-to-json";

test("Renders Pokemon when props are passed", () => {
  const component = (
    <Pokemon
      item={{
        name: "Pikachu",
        number: "001",
        types: ["test"],
        resistant: ["blah"],
        image: "hhtp://123",
        weaknesses: ["Hello", "World"]
      }}
    />
  );

  const wrapper = shallow(component);
  expect(toJson(wrapper)).toMatchSnapshot();
});
