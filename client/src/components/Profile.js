import Scoreboard from './Scoreboard.js'

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
      <Scoreboard />
    </div>
  )
}

export default Profile
