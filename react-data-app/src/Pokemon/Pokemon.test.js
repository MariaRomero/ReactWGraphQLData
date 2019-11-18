import React from "react";
import Pokemon from "./Pokemon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Renders Pokemon when props are passed", () => {
  const { container } = render(
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

  expect(container.firstChild).toMatchSnapshot();
});
