import React from "react";
import Letter from "./Letter";
import Wrapper from "../assets/wrappers/Letters.js";

function Letters({ pickedLetters, handlePicked, handleScore }) {
  const letters = [];
  for (let i = 97; i <= 122; i++) {
    const letter = String.fromCharCode(i);
    letters.push(
      <Letter
        key={`${letter}-${i - 97}`}
        letter={letter}
        picked={pickedLetters.includes(letter)}
        handlePicked={handlePicked}
        handleScore={handleScore}
      />
    );
  }

  return <Wrapper>{letters}</Wrapper>;
}

export default Letters;
