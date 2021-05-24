import '../../styles/header.css'
import { useContext } from 'react'
import { HamburgerContext } from '../../global/HamburgerContext'
import socials from '../../pictures/socials/images2'
import Options from './Options'
import logo from '../../pictures/softhouselogo.png'

function Header() {
  const { active, setActive } = useContext(HamburgerContext)

  return (
    <>
      <div
        className={(active ? 'open-menu' : '') + ' main-menu'}
        style={active ? { display: 'flex' } : null}
      >
        <img src={logo} className="logo" />
        <Options />
        <div className="created-by">
          <p>
            Created by: Adrian Rosales, Pernilla Göth, Markus Öhlén &#38; Mikael
            Eriksson
          </p>
        </div>
      </div>

      <div className="header">
        <div className="hamburger" onClick={() => setActive(!active)}>
          <div className={(active ? 'change' : '') + ' line1'}></div>
          <div className={(active ? 'change' : '') + ' line2'}></div>
          <div className={(active ? 'change' : '') + ' line3'}></div>
        </div>
      </div>
    </>
  )
}

export default Header
