import React from "react";

function Letter({ letter, picked, handlePicked, handleScore }) {
  return (
    <button
      className="btn"
      onClick={() => {
        handlePicked(letter);
        handleScore(letter);
      }}
      disabled={picked}
    >
      <strong> {letter} </strong>
    </button>
  );
}

export default Letter;
