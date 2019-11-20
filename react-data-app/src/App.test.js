import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import App, { GET_POKEMON_INFO } from "./App";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const wait = require("waait");

it("renders without crashing", () => {
  const { container } = render(
    <MockedProvider>
      <App />
    </MockedProvider>
  );
  expect(container.firstChild).toMatchSnapshot();
});

afterEach(cleanup);

it("should show error if fetch data fails", async () => {
  const query = {
    request: {
      query: GET_POKEMON_INFO
    },
    error: new Error("404")
  };

  const { getByText } = render(
    <MockedProvider mocks={[query]} addTypename={false}>
      <App />
    </MockedProvider>
  );

  await wait(0);
  expect(getByText("Network error: 404")).toBeInTheDocument();
});
