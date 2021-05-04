import { useState, useContext, useEffect } from "react";
import imgs from "../pictures/images";
import { PlayerPositionContext } from "../global/PlayerPositionContext";
import { DaysContext } from '../global/DaysContext'
import { TileContext } from '../global/TileContext'
import sound from "../diceroll.mp3";

function Dice() {
  const { currentPositionValue, setCurrentPositionValue } = useContext(
    PlayerPositionContext
  );
  const { days, setDays } = useContext(DaysContext);
  const { currentTile, setCurrentTile } = useContext(TileContext);
  const [dice, setDice] = useState(imgs[0]);
  const audio = new Audio(sound);

  
  useEffect(() => {
    days.forEach(day => {
      if(currentPositionValue === day.number) {
        setCurrentTile({color: day.color, number: day.number})
      }
    })
  }, [days, currentPositionValue, setCurrentTile]);

  const rollTheDice = () => {
    const newDice = Math.floor(Math.random() * imgs.length);
    const diceValue = newDice + 1;
    setDice(imgs[newDice]);
    setCurrentPositionValue(currentPositionValue + diceValue);
    // console.log(diceValue, "index i bild arrayen");
    audio.play();
  };

  return (
    <img
      src={dice}
      alt="Playing dice"
      className="dice"
      onClick={() => rollTheDice()}
    />
  );
}

export default Dice;
