import Dashboard from '../components/Dashboard'
import Gameboard from '../components/Gameboard'
import UsernameModal from '../components/UsernameModal'

import { useEffect, useContext } from 'react'
import { getPlayerState } from '../Models/StateModel'

import { PlayerPositionContext } from '../global/PlayerPositionContext'
import { DaysContext } from '../global/DaysContext'
import { VelocityContext } from '../global/VelocityContext'
import { TileContext } from '../global/TileContext'
import { CurrentCardContext } from '../global/CurrentCardContext'
import { StorypointsContext } from '../global/StorypointsContext'

function Game() {
  const { setDays } = useContext(DaysContext)
  const { setCurrentPositionValue } = useContext(PlayerPositionContext)
  const { setCurrentTile } = useContext(TileContext)
  const { setCurrentCard } = useContext(CurrentCardContext)
  const { setCurrentStorypoints } = useContext(StorypointsContext)
  const { setCurrentVelocity } = useContext(VelocityContext)

  useEffect(() => {
    const state = getPlayerState()

    console.log('STATE: ')
    console.log(state)
    if (state) {
      setCurrentPositionValue(state.currentPositionValue)
      setCurrentTile(state.currentTile)
      setCurrentCard(state.currentCard)
      setCurrentVelocity(state.currentVelocity)
      setCurrentStorypoints(state.currentStorypoints)
    }
  }, [])
  return (
    <>
      <Dashboard />
      <Gameboard />
      <UsernameModal />
    </>
  )
}

export default Game
