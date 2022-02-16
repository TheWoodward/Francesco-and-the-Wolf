import Grid from "./Grid";
import data from "./PuzzleSetups.json";
import { getGrid } from "./helpers";

const App = () => (
  <div className="App">
    <Grid data={getGrid(data.puzzles[0].layout)}></Grid>
  </div>
);

export default App;
