import React from "react";
import { Home } from "./Home";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
const wait = require("waait");

afterEach(cleanup);

it("Should display list of pokemons", async () => {
  const mock = {
    pokemons: [
      {
        id: "1",
        image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
        name: "Bulbasaur",
        number: "001",
        resistant: ["playing", "splashing"],
        types: ["fabric", "plastic"],
        weaknesses: ["Fire", "under 3", "water"]
      },
      {
        id: "2",
        image: "https://img.pokemondb.net/artwork/venusaur.jpg",
        name: "Venusaur",
        number: "003",
        resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
        types: ["Grass", "Poison"],
        weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
      }
    ]
  };
  const { getByText, container } = render(<Home data={mock} />);
  await wait(0);
  expect(container).toMatchSnapshot();
  expect(getByText("Pokemon List")).toBeInTheDocument();
  expect(getByText("Bulbasaur-001")).toBeInTheDocument();
  expect(getByText("Venusaur-003")).toBeInTheDocument();
});
