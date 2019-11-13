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
      {error && <p>Error, {error}</p>}
      {!data ? <p>loading</p> : <h1>Pokemon List</h1>}
      <div
        style={{
          overflow: "auto",
          maxHeight: 400,
          width: "40%",
          display: "inline-block"
        }}
      >
        {" "}
        {data && data.pokemons && (
          <ReactList
            itemRenderer={(index, key) => {
              return (
                <div
                  key={key}
                  onClick={event => handleClick(event, index)}
                  style={{
                    height: "20px",
                    padding: "6px 6px 6px 6px"
                  }}
                >
                  <img
                    alt="some value"
                    src={data.pokemons[index]["image"]}
                    style={{ height: "20px", padding: "0 6px 0 6px" }}
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
      <div
        style={{
          display: "inline-block",
          width: "40%",
          backgroundColor: "#ccc9cb",
          height: "calc(65vh - 55px)"
        }}
      >
        {currentPokemon && <Pokemon item={currentPokemon} />}
      </div>
    </Fragment>
  );
}

export default App;
