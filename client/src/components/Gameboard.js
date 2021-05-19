import '../styles/gameboard.css'
import Dice from './Dice'
import Tiles from './Tiles'
import CostumerCard from './CostumerCard'
import DailyStandupCard from './DailyStandupCard'
import Retrospective from './Retrospective'
import { PlayerPositionContext } from '../global/PlayerPositionContext'
import { DaysContext } from '../global/DaysContext'
import { RetrospectiveContext } from '../global/RetrospectiveContext'
import { VelocityContext } from '../global/VelocityContext'
import { VelocityListContext } from '../global/VelocityListContext'
import { PlayerMoveContext } from '../global/PlayerMoveContext'

import { useContext, useEffect, useState } from 'react'
import ReactModal from 'react-modal'

import { deletePlayerState } from '../Models/StateModel'
import { TileContext } from '../global/TileContext'
import { CurrentCardContext } from '../global/CurrentCardContext'
import { StorypointsContext } from '../global/StorypointsContext'

function Gameboard() {
  const { days, setDays } = useContext(DaysContext)
  const { currentPositionValue, setCurrentPositionValue } = useContext(
    PlayerPositionContext
  )
  const { currentTile, setCurrentTile } = useContext(TileContext)
  const { currentCard, setCurrentCard } = useContext(CurrentCardContext)
  const { currentStorypoints, setCurrentStorypoints } =
    useContext(StorypointsContext)
  const { retrospective, setRetrospective } = useContext(RetrospectiveContext)
  const { setCurrentVelocity, currentVelocity } = useContext(VelocityContext)
  const { velocityList, addToVelovityList } = useContext(VelocityListContext)
  const { currentPlayerMove, setPlayerMove } = useContext(PlayerMoveContext)

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (currentPositionValue > 22) {
      if (retrospective.level <= 3)
        setRetrospective({
          state: true,
          level: retrospective.level
        })
      const newValue = currentPositionValue - 22
      setCurrentPositionValue(newValue)
    }
  }, [currentPositionValue])

  const resetGame = (e) => {
    e.preventDefault()

    deletePlayerState()
    throw new Error()
  }

  const getScore = () => {
    const nrOfMoves = currentPlayerMove
    const sum = velocityList.reduce((a, b) => a + b, 0)
    const average = sum / velocityList.length
    const finalScore = Number(((average / nrOfMoves) * 100).toFixed(0))

    return finalScore
  }

  return (
    <div className="gameboard-container">
      <ReactModal
        ariaHideApp={false}
        isOpen={isOpen}
        data={{
          background: '#ffffffa8;'
        }}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 15,
            overflow: 'auto'
          },
          content: {
            position: 'absolute',
            top: '30%',
            left: '30%',
            right: '30%',
            bottom: '30%',
            zIndex: 15,
            overflow: 'auto',
            border: '5px solid #dc823d',
            borderRadius: '30px'
          }
        }}
      >
        <div className="endscreen">
          <h1>Game finished!</h1>
          <h1>You got a score of {getScore()}</h1>

          <a href="" onClick={(e) => resetGame(e)}>
            Play again
          </a>
        </div>
      </ReactModal>

      <div className="gameboard">
        <Dice changeModalState={setIsOpen} getScore={getScore} />
        <div className="row-div-tiles">
          {days.map((day, index) => {
            return index >= 0 && index <= 6 ? (
              <Tiles key={index} number={day} />
            ) : (
              ''
            )
          })}
        </div>
        {/* // start */}
        <div className="column-flex">
          <div className="column-div-tiles2">
            {days.map((day, index) => {
              return index >= 18 && index <= 21 ? (
                <Tiles key={index} number={day} />
              ) : (
                ''
              )
            })}
          </div>
          {/* TODO Cards * 2 */}
          <DailyStandupCard />
          <CostumerCard />
          <div className="column-div-tiles1">
            {days.map((day, index) => {
              return index >= 7 && index <= 10 ? (
                <Tiles key={index} number={day} />
              ) : (
                ''
              )
            })}
          </div>
        </div>
        {/* // slut */}
        <div className="row-div-tiles" style={{ flexDirection: 'row-reverse' }}>
          {days.map((day, index) => {
            return index >= 11 && index <= 17 ? (
              <Tiles key={index} number={day} />
            ) : (
              ''
            )
          })}
        </div>
      </div>
      {retrospective.state ? <Retrospective /> : ''}
    </div>
  )
}

export default Gameboard
