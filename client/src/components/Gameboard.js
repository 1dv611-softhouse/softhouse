import '../styles/gameboard.css'
import Dice from './Dice'
import Tiles from './Tiles'
import CostumerCard from './CostumerCard'
import DailyStandupCard from './DailyStandupCard'

function Gameboard() {
  const days = [
    { number: 1, name: 'Monday' },
    { number: 2, name: 'Tuesday' },
    { number: 3, name: 'Wednesday' } ,
    { number: 4, name: 'Thursday' },
    { number: 5, name: 'Friday' },
    { number: 6, name: 'Saturday' },
    { number: 7, name: 'Sunday' },
    { number: 8, name: 'Monday' },
    { number: 9, name: 'Tuesday' },
    { number: 10, name: 'Wednesday' },
    { number: 11, name: 'Thursday' },
    { number: '', name: 'Day of illness' },
    { number: 12, name: 'Friday' },
    { number: 13, name: 'Saturday' },
    { number: 14, name: 'Sunday' },
    { number: 15, name: 'Monday' },
    { number: 16, name: 'Tuesday' },
    { number: 17, name: 'Wednesday' },
    { number: 18, name: 'Thursday' },
    { number: 19, name: 'Friday' },
    { number: 20, name: 'Saturday' },
    { number: 21, name: 'Sunday' },
  ]
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
    </div>
  )
}

export default Gameboard
