import { useState, useContext } from 'react'
import imgs from '../../pictures/images'
import { PlayerPositionContext } from '../../global/PlayerPositionContext'
import { DaysContext } from '../../global/DaysContext'
import { TileContext } from '../../global/TileContext'
import { CurrentCardContext } from '../../global/CurrentCardContext'
import { HasAnsweredContext } from '../../global/HasAnsweredContext'
import { HighlightContext } from '../../global/HighlightContext'
import { VelocityContext } from '../../global/VelocityContext'
import { VelocityListContext } from '../../global/VelocityListContext'
import { StorypointsContext } from '../../global/StorypointsContext'
import { UsernameContext } from '../../global/UsernameContext'
import { PlayerMoveContext } from '../../global/PlayerMoveContext'
import { PointsContext } from '../../global/PointsContext'
import { FinalScoreContext } from '../../global/FinalScoreContext'

import sound from '../../diceroll.mp3'
import cardSound from '../../flip.mp3'
import cards from '../../cards.json'

function Dice(props) {
  const { changeModalState } = props
  const { currentPositionValue, setCurrentPositionValue } = useContext(
    PlayerPositionContext
  )
  const { setHighlight } = useContext(HighlightContext)
  const { days } = useContext(DaysContext)
  const { velocityList, addToVelovityList } = useContext(VelocityListContext)
  const { currentPlayerMove, setPlayerMove } = useContext(PlayerMoveContext)
  const { currentTile, setCurrentTile } = useContext(TileContext)
  const { hasAnswered, setHasAnswered } = useContext(HasAnsweredContext)
  const { currentCard, setCurrentCard } = useContext(CurrentCardContext)
  const { finalScore, setFinalScore } = useContext(FinalScoreContext)
  const { currentVelocity } = useContext(VelocityContext)
  const { currentStorypoints, setCurrentStorypoints } =
    useContext(StorypointsContext)
  const { username } = useContext(UsernameContext)
  const { points } = useContext(PointsContext)

  const [dice, setDice] = useState(imgs[0])
  const audio = new Audio(sound)
  const flip = new Audio(cardSound)

  const handleClick = async () => {
    // Makes sure dice is not rolled if player needs to answer question or the game has ended.
    if (hasAnswered === false || currentStorypoints <= 0) return

    rollDice()

    calculateStorypoints()
  }

  /**
   * Rolls dice.
   */
  const rollDice = () => {
    const newDice = Math.floor(Math.random() * imgs.length)
    const diceValue = newDice + 1

    setDice(imgs[newDice])
    setPlayerPosition(diceValue)

    audio.play()
  }

  /**
   * Changes storypoints according to velocity.
   */
  const calculateStorypoints = async () => {
    if (currentStorypoints - currentVelocity <= 0) {
      setCurrentStorypoints(0)
      calculateScore()
      sendHighscore(username)
      changeModalState(true)
    } else {
      setCurrentStorypoints(currentStorypoints - currentVelocity)
    }
  }

  /**
   * Calculate the score of the round.
   *
   */
  const calculateScore = () => {
    const nrOfMoves = currentPlayerMove
    const sum = velocityList.reduce((a, b) => a + b, 0)
    const average = sum / velocityList.length
    const totalScore = Number(((average / nrOfMoves) * 100).toFixed(0))

    setFinalScore(totalScore + points)
    // return finalScore + points
    console.log('I calculateScore: ' + finalScore)
  }

  /**
   * Posts highscore to the database.
   *
   * @param {string} username
   */
  const sendHighscore = (username) => {
    console.log('Send score of: ' + finalScore)

    try {
      fetch(
        'https://irv6hogkji.execute-api.eu-west-1.amazonaws.com/Production',
        {
          method: 'POST',
          body: JSON.stringify({
            username,
            score: finalScore
          })
        }
      )
        .then((response) => response.json())
        .then((r) => console.log(r))
    } catch (error) {
      console.log(error.message)
    }
  }

  /**
   * Sets position of the player according to value of the rolled dice.
   *
   * @param {number} diceValue
   */
  const setPlayerPosition = (diceValue) => {
    calculateAmountOfPlayerMoves()

    setCurrentPositionValue((prevstate) => {
      const newPlayerPosition = prevstate + diceValue

      renderCorrectCard(newPlayerPosition)

      return newPlayerPosition
    })
  }

  const calculateAmountOfPlayerMoves = () => {
    // Kanske behövs något bättre sätt här.
    if (typeof currentPlayerMove === 'object') {
      setPlayerMove(1)
    } else {
      setPlayerMove(currentPlayerMove + 1)
    }

    //Det kommer inte gå att skriva ut här då setPlayerMove = asynkront.
    // console.log('Testar att skriva ut: ' + currentPlayerMove)
    //Du kan nog istället skriva såhär:

    // setPlayerMove((prevstate) => {
    //   const newValue = prevstate + 1
    //   console.log(newValue)

    //   return newValue
    // })

    // Då använder du en sorts Callback funktion. Det du returnerar i din callback är det som somm sättar till current PlayerMove
    // /Pernilla
  }

  /**
   * Gets day according to position of player and makes sure correct card is rendered.
   *
   * @param {number} playerPosition
   */
  const renderCorrectCard = (playerPosition) => {
    days.forEach((day) => {
      if (playerPosition === day.number) {
        setCurrentTile({ color: day.color, number: day.number })
        setHasAnswered(false)

        if (day.color === 'blue') {
          doActions(true, true)
          setCurrentCard(createRandomCard('customer-card'))
        } else if (day.color === 'orange') {
          doActions(true, true)
          setCurrentCard(createRandomCard('daily-stand-up-card'))
        } else if (day.color === 'white') {
          // Renders a Normal day card with alternatives 20% of the time.
          let card
          let done = false
          const chance = 20
          const randomNr = Math.floor(Math.random() * 100)

          do {
            card = createRandomCard('normal-day-card')

            if (randomNr <= chance && card.alternatives) {
              setHasAnswered(false)
              done = true
            } else if (randomNr > chance && card.alternatives === undefined) {
              setHasAnswered(true)
              done = true
            } else {
              done = false
            }
          } while (!done)

          doActions(true, false)
          setCurrentCard(card)
        } else if (day.color === 'red') {
          setCurrentCard(createRandomCard('day-of-illness-card'))
          setHasAnswered(true)
          doActions(true, true)
        }
      }
    })
  }

  /**
   * Renders highlight and lays card sound according to sent in values.
   *
   * @param {boolean} highlight
   * @param {boolean} audio
   */
  const doActions = (highlight, audio) => {
    setTimeout(() => {
      if (highlight && audio) {
        flip.play()
        setHighlight(true)
      } else if (highlight && !audio) {
        setHighlight(true)
      }
    }, 500)

    setTimeout(() => {
      setHighlight(false)
    }, 1000)
  }

  /**
   * Gets cards from JSON file.
   *
   * @param {string} cardCategory
   * @returns
   */
  const createRandomCard = (cardCategory) => {
    const customerCards = cards.filter((el) => el.category === cardCategory)

    const randomValue = Math.floor(Math.random() * customerCards.length)

    const card = customerCards[randomValue]

    if (!card.alternatives) {
      setHasAnswered(true)
    }

    return card
  }

  return (
    <img
      src={dice}
      alt="Playing dice"
      className="dice"
      onClick={() => handleClick()}
    />
  )
}

export default Dice
