import Header from './Header'
import Highscore from './Highscore'
import Profile from './Profile'
import Options from './Options'
import { HeaderContext } from '../global/HeaderContext'
import { useEffect, useState, useContext } from 'react'

function Dashboard() {
  const { currentComponent, setCurrentComponent } = useContext(HeaderContext)

  const renderComponent = () => {
    //TODO: Lägg till alla options
    if (currentComponent === 'highscore') {
      return <Highscore />
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
