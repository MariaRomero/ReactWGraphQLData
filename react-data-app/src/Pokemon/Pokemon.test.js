import React from "react";
import { shallow, configure } from "enzyme";
import Pokemon from "./";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("Link changes the class when hovered", () => {
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

  //   let tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  expect(wrapper).toMatchSnapshot();
});
