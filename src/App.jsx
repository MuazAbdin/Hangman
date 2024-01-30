import { useState } from "react";
import "./App.css";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import EndGame from "./components/EndGame.jsx";
import dictionary from "./assets/data/dict.js";

function getRandomWord(dictionary) {
  const idx = Math.floor(Math.random() * dictionary.length);
  return dictionary[idx];
}

function App() {
  const [score, setScore] = useState(100);
  const [solution, setSolution] = useState(getRandomWord(dictionary));
  const [pickedLetters, setPickedLetters] = useState([]);
  const [showHint, setShowHint] = useState(false);

  function handlePicked(letter) {
    setPickedLetters((prev) => [...new Set([...prev, letter])]);
  }

  function handleScore(letter) {
    const pickScore = solution.word.includes(letter) ? 5 : -20;
    setScore((score) => score + pickScore);
  }

  function newGame() {
    setScore(100);
    setSolution(getRandomWord(dictionary));
    setPickedLetters([]);
    setShowHint(false);
  }

  function isGameEnded() {
    return (
      score <= 0 ||
      [...solution.word].filter((l) => !pickedLetters.includes(l)).length === 0
    );
  }

  function handleEndGame() {
    if (!isGameEnded()) return;
    return score <= 0 ? (
      <EndGame word={solution.word} newGame={newGame} />
    ) : (
      <EndGame win={true} newGame={newGame} />
    );
  }

  return (
    <>
      <h1 className="game-title">Hangman Game</h1>
      <main>
        {handleEndGame()}
        <Score score={score} />
        <Solution
          showHint={showHint}
          handleHint={() => setShowHint(true)}
          solution={solution}
          pickedLetters={pickedLetters}
        />
        <Letters
          pickedLetters={pickedLetters}
          handlePicked={handlePicked}
          handleScore={handleScore}
        />
      </main>
    </>
  );
}

export default App;
