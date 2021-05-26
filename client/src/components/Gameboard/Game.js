/**
 * The starting point of the Game.
 *
 * @version 1.0.0
 */

import Dashboard from '../Dashboard/Dashboard'
import Gameboard from './Gameboard'
import UsernameModal from './UsernameModal'

import { useEffect, useContext } from 'react'
import { setPlayerState } from '../../Models/StateModel'

import { PlayerPositionContext } from '../../global/PlayerPositionContext'
import { VelocityContext } from '../../global/VelocityContext'
import { TileContext } from '../../global/TileContext'
import { CurrentCardContext } from '../../global/CurrentCardContext'
import { StorypointsContext } from '../../global/StorypointsContext'
import { HasAnsweredContext } from '../../global/HasAnsweredContext'
import { PointsContext } from '../../global/PointsContext'
import { VelocityListContext } from '../../global/VelocityListContext'
import { PlayerMoveContext } from '../../global/PlayerMoveContext'

function Game() {
  const { currentPositionValue } = useContext(PlayerPositionContext)
  const { currentTile } = useContext(TileContext)
  const { currentCard } = useContext(CurrentCardContext)
  const { currentStorypoints } = useContext(StorypointsContext)
  const { currentVelocity } = useContext(VelocityContext)
  const { hasAnswered } = useContext(HasAnsweredContext)
  const { points } = useContext(PointsContext)
  const { velocityList } = useContext(VelocityListContext)
  const { currentPlayerMove } = useContext(PlayerMoveContext)

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
      hasAnswered,
      points,
      velocityList,
      currentPlayerMove
    })
  }, [
    currentPositionValue,
    currentTile,
    currentCard,
    currentVelocity,
    currentStorypoints,
    hasAnswered,
    points,
    velocityList,
    currentPlayerMove
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
