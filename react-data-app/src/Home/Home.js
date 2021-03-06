import React, { Fragment } from "react";
import ReactList from "react-list";
import { Link } from "react-router-dom";
import "./home.css";

export const Home = props => {
  const { data } = props;

  return (
    <Fragment>
      <h1>Pokemon List</h1>
      <div className="container">
        <div className="poke-list">
          <ReactList
            itemRenderer={(index, key) => {
              return (
                <Link
                  to={`/${data.pokemons[index]["name"]}`}
                  Home
                  className="poke-selected"
                  key={key}
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
        </div>
      </div>
    </Fragment>
  );
};
