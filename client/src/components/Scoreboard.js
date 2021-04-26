import '../styles/scoreboard.css'

function Scoreboard() {
  return (
    <>
      <div className="scoreboard">
        <div className="scoreboard-item">
          <h1>Story points</h1>
          <p>3600</p>
        </div>
        <div className="scoreboard-item">
          <h1>Velocity</h1>
          <p>8</p>
        </div>
        <div className="scoreboard-item">
          <h1>Rounds left</h1>
          <p>60</p>
        </div>
      </div>
      <div className="card-container">
        <div className="card"></div>
      </div>
    </>
  )
}

export default Scoreboard
