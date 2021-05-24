/**
 * The starting point of the Game.
 *
 * @version 1.0.0
 */

import Dashboard from '../Dashboard/Dashboard'
import Gameboard from './Gameboard'
import UsernameModal from './UsernameModal'

import { useEffect, useContext } from 'react'
import { getPlayerState, setPlayerState } from '../../Models/StateModel'

import { PlayerPositionContext } from '../../global/PlayerPositionContext'
import { VelocityContext } from '../../global/VelocityContext'
import { TileContext } from '../../global/TileContext'
import { CurrentCardContext } from '../../global/CurrentCardContext'
import { StorypointsContext } from '../../global/StorypointsContext'
import { HasAnsweredContext } from '../../global/HasAnsweredContext'

function Game() {
  const { currentPositionValue } = useContext(PlayerPositionContext)
  const { currentTile } = useContext(TileContext)
  const { currentCard } = useContext(CurrentCardContext)
  const { currentStorypoints } = useContext(StorypointsContext)
  const { currentVelocity } = useContext(VelocityContext)
  const { hasAnswered } = useContext(HasAnsweredContext)

  /**
   * Saves state of the game everytime something is changing.
   */
  useEffect(() => {
    setPlayerState({
      currentPositionValue,
      currentTile,
      currentCard,
      currentVelocity,
      currentStorypoints,
      hasAnswered
    })
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
