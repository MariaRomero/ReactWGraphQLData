import React from "react";
import "./Pokemon.css";

const Pokemon = ({
  item: { name, number, types, resistant, image, weaknesses }
}) => {
  return (
    <>
      <div>
        <img className="pokemon-img" alt={name} src={image} />
        <p>Name: {name}</p>
        <p>Number: {number}</p>
        <p>Types: {types.join(", ")}</p>
        <p>Resistant: {resistant.join(", ")}</p>
        <p>Weaknesses: {weaknesses.join(", ")}</p>
      </div>
    </>
  );
};

export default Pokemon;
