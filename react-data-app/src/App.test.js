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

it("Should show loading and after data is available should display the item", async () => {
  const mock = [
    {
      request: {
        query: GET_POKEMON_INFO
      },
      result: {
        data: {
          pokemons: [
            {
              id: "1",
              image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
              name: "Bulbasaur",
              number: "001",
              resistant: ["playing", "splashing"],
              types: ["fabric", "plastic"],
              weaknesses: ["Fire", "under 3", "water"]
            }
          ]
        }
      }
    }
  ];
  const { getByText } = render(
    <MockedProvider mocks={mock} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(getByText("Loading...")).toBeInTheDocument();
  await wait(0);
  expect(getByText("Pokemon List")).toBeInTheDocument();
  expect(getByText("Bulbasaur-001")).toBeInTheDocument();
});

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
