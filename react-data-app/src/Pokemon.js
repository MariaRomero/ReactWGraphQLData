import React from "react";

const detail = {
  padding: "0 6px"
};

const Pokemon = ({
  item: { name, number, types, resistant, image, weaknesses }
}) => {
  return (
    <>
      <div>
        <img
          className="Pokemon"
          alt={name}
          src={image}
          style={{
            height: "150px",
            padding: "10px 10px 10px 10px",
            width: "150px",
            transform: "translate(-50%, 0)",
            marginLeft: "50%"
          }}
        />
        <p style={detail}>Name: {name}</p>
        <p style={detail}>Number: {number}</p>
        <p style={detail}>Types: {types.join(", ")}</p>
        <p style={detail}>Resistant: {resistant.join(", ")}</p>
        <p style={detail}>Weaknesses: {weaknesses.join(", ")}</p>
      </div>
    </>
  );
};

export default Pokemon;
