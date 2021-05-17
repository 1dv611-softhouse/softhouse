import '../styles/dashboard.css'
import Header from './Header'
import Highscore from './Highscore'
import Rules from './Rules'
import Profile from './Profile'
import { HeaderContext } from '../global/HeaderContext'
import { useContext } from 'react'

function Dashboard() {
  const { currentComponent } = useContext(HeaderContext)

  const renderComponent = () => {
    if (currentComponent === 'highscore') {
      return <Highscore />
    } else if (currentComponent === 'rules') {
      return <Rules />
    } else {
      return <Profile />
    }
  }

  return (
    <div className="dashboard-container">
      <Header />
      {renderComponent()}
    </div>
  )
}

export default Dashboard
