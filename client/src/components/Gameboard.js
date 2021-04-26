import "../styles/gameboard.css";
import Dice from "./Dice";
import Tiles from "./Tiles";
import CostumerCard from "./CostumerCard";
import DailyStandupCard from "./DailyStandupCard";

function Gameboard() {
  // TODO: kommentar att det är 22 värden pga day of illness
  const days = [
    { number: 1, name: "Monday", boardValue: 1 },
    { number: 2, name: "Tuesday", boardValue: 2 },
    { number: 3, name: "Wednesday", boardValue: 3 },
    { number: 4, name: "Thursday", boardValue: 4 },
    { number: 5, name: "Friday", boardValue: 5 },
    { number: 6, name: "Saturday", boardValue: 6 },
    { number: 7, name: "Sunday", boardValue: 7 },
    { number: 8, name: "Monday", boardValue: 8 },
    { number: 9, name: "Tuesday", boardValue: 9 },
    { number: 10, name: "Wednesday", boardValue: 10 },
    { number: 11, name: "Thursday", boardValue: 11 },
    { number: 12, name: "Day of illness", boardValue: "" },
    { number: 13, name: "Friday", boardValue: 12 },
    { number: 14, name: "Saturday", boardValue: 13 },
    { number: 15, name: "Sunday", boardValue: 14 },
    { number: 16, name: "Monday", boardValue: 15 },
    { number: 17, name: "Tuesday", boardValue: 16 },
    { number: 18, name: "Wednesday", boardValue: 17 },
    { number: 19, name: "Thursday", boardValue: 18 },
    { number: 20, name: "Friday", boardValue: 19 },
    { number: 21, name: "Saturday", boardValue: 20 },
    { number: 22, name: "Sunday", boardValue: 21 },
  ];
  return (
    <div className="gameboard-container">
      <div className="gameboard">
        <Dice />
        <div className="row-div-tiles">
          {days.map((day, index) => {
            return index >= 0 && index <= 6 ? (
              <Tiles key={index} number={day} />
            ) : (
              ""
            );
          })}
        </div>
        {/* // start */}
        <div className="column-flex">
          <div className="column-div-tiles2">
            {days.map((day, index) => {
              return index >= 18 && index <= 21 ? (
                <Tiles key={index} number={day} />
              ) : (
                ""
              );
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
                ""
              );
            })}
          </div>
        </div>
        {/* // slut */}
        <div className="row-div-tiles" style={{ flexDirection: "row-reverse" }}>
          {days.map((day, index) => {
            return index >= 11 && index <= 17 ? (
              <Tiles key={index} number={day} />
            ) : (
              ""
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gameboard;
