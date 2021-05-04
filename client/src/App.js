import "./styles/style.css";
import "./styles/authentication.css";
import Dashboard from "./components/Dashboard";
import Gameboard from "./components/Gameboard";
// import Authentication from "./components/Authentication";
import { HeaderProvider } from "./global/HeaderContext";
import { HamburgerProvider } from "./global/HamburgerContext";
import { PlayerPositionProvider } from "./global/PlayerPositionContext";
import { CurrentCardProvider } from "./global/CurrentCardContext";
import { DaysProvider } from './global/DaysContext'
import { TileProvider } from './global/TileContext'

function App() {
  return (
    <HamburgerProvider>
      <HeaderProvider>
        <PlayerPositionProvider>
          <CurrentCardProvider>
            <DaysProvider>
              <TileProvider>
            <div className="container">
              <Dashboard />
              <Gameboard />
            </div>
            {/* <Authentication /> */}
             </TileProvider>
            </DaysProvider>
          </CurrentCardProvider>
        </PlayerPositionProvider>
      </HeaderProvider>
    </HamburgerProvider>
  );
}

export default App;
