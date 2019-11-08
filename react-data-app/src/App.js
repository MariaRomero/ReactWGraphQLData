import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

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
  const { data, loading, error } = useQuery(GET_POKEMON_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error, {error}</p>;

  return (
    <React.Fragment>
      <h1>Pokemon List</h1>
      <div className="container">
        {data &&
          data.pokemons &&
          data.pokemons.map((pokemon, index) => (
            <div key={index} className="card">
              <img src={pokemon.image} />
              <div class="card-body">
                <h3>{pokemon.name}</h3>
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
