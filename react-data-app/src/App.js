import React, { useState, Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import ReactList from "react-list";
import gql from "graphql-tag";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./app.css";
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

const Home = props => {
  const { data, setCurrentPokemon } = props;
  const handleClick = (event, pokemonId) => {
    setCurrentPokemon(data.pokemons[pokemonId]);
  };
  return (
    <Fragment>
      <h1>Pokemon List</h1>
      <div className="container">
        <div className="poke-list">
          {data && data.pokemons && (
            <ReactList
              itemRenderer={(index, key) => {
                return (
                  <Link
                    to={`/${data.pokemons[index]["id"]}`}
                    Home
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
                  </Link>
                );
              }}
              length={data.pokemons.length}
              type="simple"
            />
          )}
        </div>
      </div>
    </Fragment>
  );
};

function App() {
  const { loading, data, error } = useQuery(GET_POKEMON_INFO);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home data={data} setCurrentPokemon={setCurrentPokemon} />
        </Route>
        {currentPokemon && (
          <Route path="/:id" children={<Pokemon item={currentPokemon} />} />
        )}
      </Switch>
    </Router>
  );
}

export default App;
