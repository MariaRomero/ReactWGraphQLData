import React, { useState, Fragment } from "react";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import ReactList from "react-list";
import Pokemon from "./Pokemon";

const GET_POKEMON_INFO = gql`
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
  const { data, error } = useQuery(GET_POKEMON_INFO);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  if (error) return <div>Error! {error.message}</div>;

  const handleClick = (event, pokemonId) => {
    setCurrentPokemon(data.pokemons[pokemonId]);
  };

  return (
    <Fragment>
      {!data ? <p>loading</p> : <h1>Pokemon List</h1>}
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
                      alt={data.pokemons[index]["name"]}
                      src={data.pokemons[index]["image"]}
                    />
                    {data.pokemons[index]["name"]} -
                    {data.pokemons[index]["number"]}
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
