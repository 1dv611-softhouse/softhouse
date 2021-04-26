import '../styles/tiles.css'
import player from '../pictures/user.png';
import { PlayerPositionContext } from '../global/PlayerPositionContext'
import { useState, useContext } from 'react'

function Tiles(props) {
  const { number } = props
  const { currentPositionValue, setCurrentPositionValue } = useContext(PlayerPositionContext);

  const currentPosition = () => {
    if(number.number === 1 && currentPositionValue === 1) {
      return (<img src={player} style={{width: "16px"}} />);
    } else if(number.number === currentPositionValue) {
      return (<img src={player} style={{width: "16px"}} />);
    }
  }

  return (
    <div className={` tiles-container`}>
    {currentPosition()}
      <p>{number.number}</p>
      <p>{number.name}</p>
    </div>
  )
}

export default Tiles
