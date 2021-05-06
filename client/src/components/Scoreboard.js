import "../styles/scoreboard.css";
import ActiveCard from "./ActiveCard";
import { VelocityContext } from '../global/VelocityContext'
import { StorypointsContext } from '../global/StorypointsContext'
import { useContext } from "react";

function Scoreboard() {
  const { currentStorypoints, setCurrentStorypoints } = useContext(StorypointsContext)
  const { currentVelocity, setCurrentVelocity } = useContext(VelocityContext)
  return (
    <>
      <div className="scoreboard">
        <div className="scoreboard-item">
          <h1>Story points</h1>
          <p>{currentStorypoints}</p>
        </div>
        <div className="scoreboard-item">
          <h1>Velocity</h1>
          <p>{currentVelocity}</p>
        </div>
        <div className="scoreboard-item">
          <h1>Rounds left</h1>
          <p>60</p>
        </div>
      </div>
      <div className="card-container">
        <ActiveCard />
      </div>
    </>
  );
}

export default Scoreboard;
