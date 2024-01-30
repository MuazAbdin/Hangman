import React from "react";
import Wrapper from "../assets/wrappers/Solution.js";

function Solution({ showHint, handleHint, solution, pickedLetters }) {
  return (
    <Wrapper>
      {showHint && <div className="hint">{solution.hint}</div>}
      {!showHint && (
        <button className="btn" onClick={handleHint}>
          Show Hint
        </button>
      )}
      <div className="word">
        {[...solution.word]
          .map((c) => (pickedLetters.includes(c) ? c : "_"))
          .join(" ")}
      </div>
    </Wrapper>
  );
}

export default Solution;
