import React, { useState, useEffect } from "react";
import Grid from "./Grid";
import data from "./PuzzleSetups.json";
import { getGridAfterMove, getInitialGrid } from "./helpers";

const App = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    setGrid(getInitialGrid(data.puzzles[0]));
  }, []);

  const handleMove = (direction) => {
    setGrid(getGridAfterMove([...grid], "francesco", direction));
    //TODO: wolf's move
    //TODO: check win/loss condition
  };

  return (
    <div className="App">
      <Grid data={grid}></Grid>
      {["up", "down", "left", "right"].map((direction) => (
        <button onClick={() => handleMove(direction)} key={direction}>
          {direction}
        </button>
      ))}
    </div>
  );
};

export default App;
