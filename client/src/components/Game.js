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

function Game() {
  const { currentPositionValue, setCurrentPositionValue } = useContext(
    PlayerPositionContext
  )
  const { currentTile, setCurrentTile } = useContext(TileContext)
  const { currentCard, setCurrentCard } = useContext(CurrentCardContext)
  const { currentStorypoints, setCurrentStorypoints } =
    useContext(StorypointsContext)
  const { currentVelocity, setCurrentVelocity } = useContext(VelocityContext)

  useEffect(() => {
    const state = getPlayerState()

    console.log('STATE: ')
    console.log(state)
    console.log(state.currentCard)
    if (state) {
      // setCurrentPositionValue(state.currentPositionValue)
      // setCurrentTile(state.currentTile)
      // setCurrentCard(state.currentCard)
      // setCurrentVelocity(state.currentVelocity)
      // setCurrentStorypoints(state.currentStorypoints)
    }
  }, [])

  useEffect(() => {
    const playerState = {
      currentPositionValue,
      currentTile,
      currentCard,
      currentVelocity,
      currentStorypoints
    }

    setPlayerState(playerState)
  }, [
    currentPositionValue,
    currentTile,
    currentCard,
    currentVelocity,
    currentStorypoints
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
