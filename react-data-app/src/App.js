import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import "./app.css";
import Pokemon from "./Pokemon/Pokemon";
import { Home } from "./Home/Home";

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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home data={data} />
        </Route>
        <Route path="/:id" children={<Child data={data} />} />
      </Switch>
    </Router>
  );
}

const Child = props => {
  let { id } = useParams();
  const pokemonSelected = props.data.pokemons.find(e => e.id === id);
  pokemonSelected ? (
    <Pokemon item={pokemonSelected} />
  ) : (
    <div>Sorry there was a problem loading this page</div>
  );
};

export default App;
