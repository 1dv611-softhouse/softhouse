import '../styles/profile.css'
import Scoreboard from "./Scoreboard.js";
import { useSpring, animated } from "react-spring";

function Profile() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={props} className="profile-container">
      <div className="picture-container">
        <img
          className="picture"
          src="https://i.pinimg.com/originals/ea/c5/6f/eac56f0157e9f08dd12659da8e4b364c.jpg"
          alt=""
        />
        <h1>Test testson</h1>
      </div>
      <Scoreboard />
    </animated.div>
  );
}

export default Profile;
