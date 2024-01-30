import React from "react";

function Score({ score }) {
  const style = {
    color: getColor(score),
    fontSize: "2em",
    fontWeight: "600",
    backgroundColor: getBackgroundColor(score),
    padding: "0.5em",
    borderRadius: "var(--border-radius)",
  };

  function getColor(score) {
    if (score < 50) return "red";
    if (score < 80) return "orange";
    return "green";
  }

  function getBackgroundColor(score) {
    if (score < 50) return "var(--red-light)";
    if (score < 80) return "var(--yellow-light)";
    return "var(--green-light)";
  }

  return <div style={style}>{score}</div>;
}

export default Score;
