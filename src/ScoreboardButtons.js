import React, { useState } from "react";
import "./App.css";

function ScoreboardButtons() {
  const [tigersScore, setTigersScore] = useState(0);
  const [lionsScore, setLionsScore] = useState(0);

  return (
    <div className="buttons">
      <div className="homeButtons">
        <button
          onClick={() => {
            setLionsScore(lionsScore + 6);
          }}
          className="homeButtons__touchdown"
        >
          Home Touchdown
        </button>
        <button
          onClick={() => {
            setLionsScore(lionsScore + 3);
          }}
          className="homeButtons__fieldGoal"
        >
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button
          onClick={() => {
            setTigersScore(tigersScore + 6);
          }}
          className="awayButtons__touchdown"
        >
          Away Touchdown
        </button>
        <button
          onClick={() => {
            setTigersScore(tigersScore + 3);
          }}
          className="awayButtons__fieldGoal"
        >
          Away Field Goal
        </button>
      </div>
    </div>
  );
}
export default ScoreboardButtons;
