import React, { useState, Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import ReactList from "react-list";
import gql from "graphql-tag";

import "./App.css";
import Pokemon from "./Pokemon/Pokemon";

export const GET_POKEMON_INFO = gql`
  {
    pokemons(first: 151) {
      id
      image
      number
      name
      types
      resistant
      weaknesses
    }
  }
`;

function App() {
  const { loading, data, error } = useQuery(GET_POKEMON_INFO);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  const handleClick = (event, pokemonId) => {
    setCurrentPokemon(data.pokemons[pokemonId]);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Fragment>
      <h1>Pokemon List</h1>
      <div className="container">
        <div className="poke-list">
          {data && data.pokemons && (
            <ReactList
              itemRenderer={(index, key) => {
                return (
                  <div
                    className="poke-selected"
                    key={key}
                    onClick={event => handleClick(event, index)}
                  >
                    <img
                      className="avatar"
                      alt={data.pokemons[index]["name"]}
                      src={data.pokemons[index]["image"]}
                    />
                    <p className="text">
                      {data.pokemons[index]["name"]}-
                      {data.pokemons[index]["number"]}
                    </p>
                  </div>
                );
              }}
              length={data.pokemons.length}
              type="simple"
            />
          )}
        </div>
        <div className="poke-view-selected">
          {currentPokemon && <Pokemon item={currentPokemon} />}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
