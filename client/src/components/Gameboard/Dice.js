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

import { setPlayerState } from '../../Models/StateModel'

import sound from '../../diceroll.mp3'
import cardSound from '../../flip.mp3'
import cards from '../../cards.json'

function Dice(props) {
  const { changeModalState, getScore } = props
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
  const { currentVelocity } = useContext(VelocityContext)
  const { currentStorypoints, setCurrentStorypoints } =
    useContext(StorypointsContext)
  const { username } = useContext(UsernameContext)

  const [dice, setDice] = useState(imgs[0])
  const audio = new Audio(sound)
  const flip = new Audio(cardSound)

  const rollTheDice = async () => {
    if (hasAnswered === false || currentStorypoints <= 0) return

    const newDice = Math.floor(Math.random() * imgs.length)
    const diceValue = newDice + 1

    setDice(imgs[newDice])
    setPlayerPosition(diceValue)

    if (currentStorypoints - currentVelocity <= 0) {
      setCurrentStorypoints(0)
      sendHighscore(username)
      changeModalState(true)
    } else {
      setCurrentStorypoints(currentStorypoints - currentVelocity)
    }
    const playerState = {
      currentPositionValue,
      currentTile,
      currentCard,
      currentVelocity,
      currentStorypoints
    }

    setPlayerState(playerState)

    audio.play()
  }

  const sendHighscore = (username) => {
    const score = getScore()
    console.log('Register your highscore: ' + getScore())
    try {
      fetch(
        'https://irv6hogkji.execute-api.eu-west-1.amazonaws.com/Production',
        {
          method: 'POST',
          body: JSON.stringify({
            username,
            score
          })
        }
      )
        .then((response) => response.json())
        .then((r) => console.log(r))
    } catch (error) {
      console.log(error.message)
    }
  }

  const setPlayerPosition = (diceValue) => {
    // Kanske behövs något bättre sätt här.
    if (typeof currentPlayerMove === 'object') {
      setPlayerMove(1)
    } else {
      setPlayerMove(currentPlayerMove + 1)
    }

    console.log('Testar att skriva ut: ' + currentPlayerMove)

    setCurrentPositionValue((prevstate) => {
      const newValue = prevstate + diceValue

      days.forEach((day) => {
        if (newValue === day.number) {
          setCurrentTile({ color: day.color, number: day.number })
          setHasAnswered(false)

          if (day.color === 'blue') {
            const card = createRandomCard('customer-card')
            doActions(true, true)
            setCurrentCard(card)
          } else if (day.color === 'orange') {
            const card = createRandomCard('daily-stand-up-card')
            doActions(true, true)
            setCurrentCard(card)
          } else if (day.color === 'white') {
            const chance = 20
            const randomNr = [Math.floor(Math.random() * 100)]
            let card
            let done = false

            do {
              card = createRandomCard('normal-day-card')

              if (chance < randomNr && card.alternatives) {
                done = true
                setHasAnswered(true)
              } else if (chance > randomNr && card.alternatives === undefined) {
                done = true
                setHasAnswered(true)
              } else {
                done = false
              }
            } while (!done)

            doActions(true, false)
            setCurrentCard(card)
          } else if (day.color === 'red') {
            const card = createRandomCard('day-of-illness-card')
            setHasAnswered(true)
            doActions(true, true)
            setCurrentCard(card)
          }
        }
      })
      return newValue
    })
  }

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
      onClick={() => rollTheDice()}
    />
  )
}

export default Dice
