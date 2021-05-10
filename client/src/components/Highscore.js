import '../styles/highscore.css'

import { useEffect, useState } from 'react'

function Highscore() {
  const [highscores, setHighscores] = useState([])

  useEffect(() => {
    fetch('https://irv6hogkji.execute-api.eu-west-1.amazonaws.com/Production')
      .then(response => response.json())
      .then(data => {
        const sortedHighscores = data.body.Items.sort((a,b) => b.score - a.score).slice(0,10)

        setHighscores(sortedHighscores)
      });
  }, [])
  
  // Lägg denna funktion där spelet tar slut och hämta ut rätt username och score och ta bort ett form nedanför
  const sendHighscore = (e) => {
    e.preventDefault()

    const username = document.querySelector('#asdfUsername').value
    const score = document.querySelector('#asdfScore').value
    try {
      fetch('https://irv6hogkji.execute-api.eu-west-1.amazonaws.com/Production', {
        method: 'POST',
        body: JSON.stringify({
          username,
          score
        })
      })
      .then(response => response.json())
      .then(r => console.log(r))
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="highscore-container">
      <h1 className="highscore-header">Highscore</h1>
      <ol className="highscore-list">
        {highscores.map((highscore, index) => {
          return (
            <li key={index}>
              {highscore.username} <span>{highscore.score}</span>
            </li>
          )
        })}
      </ol>

      {/* Ta bort detta form när funktionen flyttas */}
      <form>
        <input type="text" id="asdfUsername" />
        <input type="number" id="asdfScore" />
        <button onClick={(e) => sendHighscore(e)}>Sicka highscore</button>
      </form>
    </div>
  )
}

export default Highscore
