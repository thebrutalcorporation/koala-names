import React from "react";

function Name({ option }) {
  return (
    <div>
      <div>NAME: {option.name}</div>
      <div>MEANING: {option.meaning}</div>
      <div>ORIGIN: {option.origin}</div>
      <div>POPULARITY: {option.popularity}</div>
      <div>
        {option.celebrities.map((celebrity) => (
          <span>{celebrity}</span>
        ))}
      </div>
    </div>
  );
}

export default Name;
