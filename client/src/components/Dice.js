import { useState, useContext } from 'react'
import imgs from '../pictures/images'
import { PlayerPositionContext } from '../global/PlayerPositionContext'

function Dice() {
  const { currentPositionValue, setCurrentPositionValue } = useContext(PlayerPositionContext);
  const [dice, setDice] = useState(imgs[0])
  const rollTheDice = () => {
    const newDice = Math.floor(Math.random() * imgs.length)
    const diceValue = newDice + 1;
    setDice(imgs[newDice])
    setCurrentPositionValue(currentPositionValue + diceValue);
    console.log(diceValue, 'index i bild arrayen')
  }

  return (
    <img
      src={dice}
      alt="Playing dice"
      className="dice"
      onClick={() => rollTheDice()}
    />
  )
}

export default Dice
