import './styles/style.css'
import './styles/authentication.css'
import Dashboard from './components/Dashboard'
import Gameboard from './components/Gameboard'
import Authentication from './components/Authentication'
import { HeaderProvider } from './global/HeaderContext'
import { HamburgerProvider } from './global/HamburgerContext'
import { PlayerPositionProvider } from './global/PlayerPositionContext'

function App() {
  return (
    <HamburgerProvider>
      <HeaderProvider>
        <PlayerPositionProvider>
        <div className="container">
          <Dashboard />
          <Gameboard />
        </div>
        <Authentication />
        </PlayerPositionProvider>
      </HeaderProvider>
    </HamburgerProvider>
  )
}

export default App
