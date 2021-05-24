import Dashboard from '../components/Dashboard'
import Gameboard from '../components/Gameboard'
import UsernameModal from '../components/UsernameModal'

import { useEffect, useContext } from 'react'
import { getPlayerState, setPlayerState } from '../Models/StateModel'

import { PlayerPositionContext } from '../global/PlayerPositionContext'
import { DaysContext } from '../global/DaysContext'
import { VelocityContext } from '../global/VelocityContext'
import { TileContext } from '../global/TileContext'
import { CurrentCardContext } from '../global/CurrentCardContext'
import { StorypointsContext } from '../global/StorypointsContext'
import { HasAnsweredContext } from '../global/HasAnsweredContext'

function Game() {
  const { currentPositionValue, setCurrentPositionValue } = useContext(
    PlayerPositionContext
  )
  const { currentTile, setCurrentTile } = useContext(TileContext)
  const { currentCard, setCurrentCard } = useContext(CurrentCardContext)
  const { currentStorypoints, setCurrentStorypoints } =
    useContext(StorypointsContext)
  const { currentVelocity, setCurrentVelocity } = useContext(VelocityContext)
  const { hasAnswered, setHasAnswered } = useContext(HasAnsweredContext)

  useEffect(() => {
    const playerState = {
      currentPositionValue,
      currentTile,
      currentCard,
      currentVelocity,
      currentStorypoints,
      hasAnswered
    }

    setPlayerState(playerState)
  }, [
    currentPositionValue,
    currentTile,
    currentCard,
    currentVelocity,
    currentStorypoints,
    hasAnswered
  ])

  return (
    <>
      <Dashboard />
      <Gameboard />
      <UsernameModal />
    </>
  )
}

export default Game
