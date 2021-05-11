import '../styles/gameboard.css'
import Dice from './Dice'
import Tiles from './Tiles'
import CostumerCard from './CostumerCard'
import DailyStandupCard from './DailyStandupCard'
import Retrospective from './Retrospective'
import { PlayerPositionContext } from '../global/PlayerPositionContext'
import { DaysContext } from '../global/DaysContext'
import { RetrospectiveContext } from '../global/RetrospectiveContext'
import { useContext, useEffect, useState } from 'react'

function Gameboard() {
  const { days, setDays } = useContext(DaysContext)
  const { currentPositionValue, setCurrentPositionValue } = useContext(
    PlayerPositionContext
  )
  const { retrospective, setRetrospective } = useContext(RetrospectiveContext)

  useEffect(() => {
    if (currentPositionValue > 22) {
      setRetrospective(true)
      const newValue = currentPositionValue - 22
      setCurrentPositionValue(newValue)
    }

    setDays([
      { number: 1, name: 'Monday', boardValue: 1, color: 'white' },
      { number: 2, name: 'Tuesday', boardValue: 2, color: 'orange' },
      { number: 3, name: 'Wednesday', boardValue: 3, color: 'blue' },
      { number: 4, name: 'Thursday', boardValue: 4, color: 'white' },
      { number: 5, name: 'Friday', boardValue: 5, color: 'orange' },
      { number: 6, name: 'Saturday', boardValue: 6, color: 'blue' },
      { number: 7, name: 'Sunday', boardValue: 7, color: 'white' },
      { number: 8, name: 'Monday', boardValue: 8, color: 'blue' },
      { number: 9, name: 'Tuesday', boardValue: 9, color: 'orange' },
      { number: 10, name: 'Wednesday', boardValue: 10, color: 'blue' },
      { number: 11, name: 'Thursday', boardValue: 11, color: 'white' },
      { number: 12, name: 'Day of illness', boardValue: '', color: 'red' },
      { number: 13, name: 'Friday', boardValue: 12, color: 'orange' },
      { number: 14, name: 'Saturday', boardValue: 13, color: 'blue' },
      { number: 15, name: 'Sunday', boardValue: 14, color: 'white' },
      { number: 16, name: 'Monday', boardValue: 15, color: 'orange' },
      { number: 17, name: 'Tuesday', boardValue: 16, color: 'blue' },
      { number: 18, name: 'Wednesday', boardValue: 17, color: 'white' },
      { number: 19, name: 'Thursday', boardValue: 18, color: 'orange' },
      { number: 20, name: 'Friday', boardValue: 19, color: 'white' },
      { number: 21, name: 'Saturday', boardValue: 20, color: 'blue' },
      { number: 22, name: 'Sunday', boardValue: 21, color: 'orange' }
    ])
  }, [currentPositionValue])

  return (
    <div className="gameboard-container">
      <div className="gameboard">
        <Dice />
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
      {retrospective ? <Retrospective /> : ''}
    </div>
  )
}

export default Gameboard
