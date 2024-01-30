import React from "react";
import Wrapper from "../assets/wrappers/EndGame.js";

function EndGame({ word, win = false, newGame }) {
  return (
    <Wrapper>
      {win ? (
        <div className="message win">Congratulations!!</div>
      ) : (
        <>
          <div className="message lose">Game Over!!</div>
          <div>
            The word is: <strong>{word}</strong>
          </div>
        </>
      )}
      <button className="btn" onClick={newGame}>
        New Game
      </button>
    </Wrapper>
  );
}

export default EndGame;
