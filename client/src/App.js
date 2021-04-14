import "./styles/style.css";
import Dashboard from "./components/Dashboard";
import Gameboard from "./components/Gameboard";

function App() {
  return (
    <div className="container">
      <Dashboard />
      <Gameboard />
    </div>
  );
}

export default App;
