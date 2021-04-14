import "./styles/style.css";
import Dashboard from "./components/Dashboard";
import Gameboard from "./components/Gameboard";
import Highscore from "./components/Highscore";

function App() {
  return (
    <div className="container">
      <Dashboard />
      <Gameboard />
    </div>
  );
}

export default App;
