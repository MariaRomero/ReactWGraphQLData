import React from "react";
import "./Pokemon.css";

const Pokemon = ({
  item: { name, number, types, resistant, image, weaknesses }
}) => {
  return (
    <>
      <div>
        <img className="pokemon-img" alt={name} src={image} />
        <p className="poke-text">Name: {name}</p>
        <p className="poke-text">Number: {number}</p>
        <p className="poke-text">Types: {types.join(", ")}</p>
        <p className="poke-text">Resistant: {resistant.join(", ")}</p>
        <p className="poke-text">Weaknesses: {weaknesses.join(", ")}</p>
      </div>
    </>
  );
};

export default Pokemon;
