import '../styles/highscore.css'

import { useEffect, useState } from 'react'

function Highscore() {
  const [highscores, setHighscores] = useState([])

  useEffect(() => {
    fetch('https://irv6hogkji.execute-api.eu-west-1.amazonaws.com/Production')
      .then((response) => response.json())
      .then((data) => {
        const sortedHighscores = data.body.Items.sort(
          (a, b) => b.score - a.score
        ).slice(0, 10)

        setHighscores(sortedHighscores)
      })
  }, [])

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
    </div>
  )
}

export default Highscore
