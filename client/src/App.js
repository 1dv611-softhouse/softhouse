import './styles/style.css'
import Dashboard from './components/Dashboard'
import Gameboard from './components/Gameboard'
import { HeaderProvider } from './global/HeaderContext'
import { HamburgerProvider } from './global/HamburgerContext'

function App() {
  return (
    <HamburgerProvider>
      <HeaderProvider>
        <div className="container">
          <Dashboard />
          <Gameboard />
        </div>
      </HeaderProvider>
    </HamburgerProvider>
  )
}

export default App
