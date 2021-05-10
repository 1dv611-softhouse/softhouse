import "../styles/tiles.css";
import player from "../pictures/user.png";
import { PlayerPositionContext } from "../global/PlayerPositionContext";
import { useContext } from "react";

function Tiles(props) {
  const { number } = props;
  const { currentPositionValue, setCurrentPositionValue } = useContext(
    PlayerPositionContext
  );

  const currentPosition = () => {
    if (number.number === 1 && currentPositionValue === 1) {
      return <img src={player} style={{ width: "16px" }} />;
    } else if (number.number === currentPositionValue) {
      return <img src={player} style={{ width: "16px" }} />;
    }
  };

  return (
    <div className={` tiles-container tile-color-${number.color}`}>
      {currentPosition()}
      <p>{number.boardValue}</p>
      <p>{number.name}</p>
    </div>
  );
}

export default Tiles;
