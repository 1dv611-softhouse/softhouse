import Tiles from "./Tiles";

function Gameboard() {
  const days = [
    { number: 1, name: "Monday" },
    { number: 2, name: "Tuesday" },
    { number: 3, name: "Wednesday" },
    { number: 4, name: "Thursday" },
    { number: 5, name: "Friday" },
    { number: 6, name: "Saturday" },
    { number: 7, name: "Sunday" },
    { number: 8, name: "Monday" },
    { number: 9, name: "Tuesday" },
    { number: 10, name: "Wednesday" },
    { number: 11, name: "Thursday" },
    { number: 12, name: "Friday" },
    { number: 13, name: "Saturday" },
    { number: 14, name: "Sunday" },
    { number: 15, name: "Monday" },
    { number: 16, name: "Tuesday" },
    { number: 17, name: "Wednesday" },
    { number: 18, name: "Thursday" },
    { number: 19, name: "Friday" },
    { number: 20, name: "Saturday" },
    { number: 21, name: "Sunday" },
  ];
  return (
    <div className="gameboard-container">
      {days.map((day, index) => {
        return <Tiles key={index} number={day.number} name={day.name} />;
      })}
    </div>
  );
}

export default Gameboard;
