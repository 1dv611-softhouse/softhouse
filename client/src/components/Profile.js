function Profile() {
  return (
    <div className="dashboard-container">
      <div className="picture-container">
        <img
          className="picture"
          src="https://i.pinimg.com/originals/ea/c5/6f/eac56f0157e9f08dd12659da8e4b364c.jpg"
          alt=""
        />
        <h1>Test testson</h1>
      </div>
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
    </div>
  )
}

export default Profile
