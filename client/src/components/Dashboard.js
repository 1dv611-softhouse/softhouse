import Header from "./Header";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="picture-contaienr">
        <div className="picture"></div>
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
  );
}

export default Dashboard;
