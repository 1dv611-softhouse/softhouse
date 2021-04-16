import { useState } from 'react'
import imgs from '../pictures/images'

function Dice() {
  const [dice, setDice] = useState(imgs[0])
  const rollTheDice = () => {
    const newDice = Math.floor(Math.random() * imgs.length)
    setDice(imgs[newDice])
    console.log(newDice, 'index i bild arrayen')
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
