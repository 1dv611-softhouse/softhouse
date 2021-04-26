import { useSpring, animated } from "react-spring";

function Highscore() {

  // Vad gör detta? Jag ser ingen skillnad när jag tar bort det. /Pernilla
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={props} className="highscore-container">
      <h1 className="highscore-header">Highscore</h1>
      <ol className="highscore-list">
        <li>
          lenaandersson <span>30</span>
        </li>
        <li>
          håkanmelin33 <span>38</span>
        </li>
        <li>
          jenseriksson <span>56</span>
        </li>
        <li>
          malin_josefsson <span>102</span>
        </li>
        <li>
          davidnilsson <span>234</span>
        </li>
        <li>
          tinapersson <span>254</span>
        </li>
        <li>
          hansrosqvist <span>376</span>
        </li>
        <li>
          linajakobsben <span>523</span>
        </li>
        <li>
          perlindqvist <span>700</span>
        </li>
        <li>
          jennydahlström <span>1200</span>
        </li>
      </ol>
    </animated.div>
  );
}

export default Highscore;
