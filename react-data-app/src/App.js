import React, { Fragment } from "react";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import ReactList from "react-list";

const GET_POKEMON_INFO = gql`
  {
    pokemons(first: 151) {
      id
      image
      number
      name
    }
  }
`;

function App() {
  const { data, error } = useQuery(GET_POKEMON_INFO);

  return (
    <Fragment>
      {error && <p>Error, {error}</p>}
      {!data ? <p>loading</p> : <h1>Pokemon List</h1>}
      <div>
        {data && data.pokemons && (
          <ReactList
            itemRenderer={(index, key) => {
              return (
                <div
                  key={key}
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
                  {data.pokemons[index]["name"]} (
                  {data.pokemons[index]["number"]})
                </div>
              );
            }}
            length={data.pokemons.length}
            type="simple"
          />
        )}
      </div>
    </Fragment>
  );
}

export default App;
