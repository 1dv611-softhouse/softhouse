import { useState } from 'react'

function Header() {
  const [active, setActive] = useState(false)

  return (
    <div className="header">
      <div className="hamburger" onClick={() => setActive(!active)}>
        <div className={(active ? 'change' : '') + ' line1'}></div>
        <div className={(active ? 'change' : '') + ' line2'}></div>
        <div className={(active ? 'change' : '') + ' line3'}></div>
      </div>
    </div>
  )
}

export default Header
