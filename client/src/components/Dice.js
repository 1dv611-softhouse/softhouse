import { useState, useContext, useEffect } from 'react'
import imgs from '../pictures/images'
import { PlayerPositionContext } from '../global/PlayerPositionContext'
import { DaysContext } from '../global/DaysContext'
import { TileContext } from '../global/TileContext'
import { CurrentCardContext } from '../global/CurrentCardContext'
import { HasAnsweredContext } from '../global/HasAnsweredContext'
import sound from '../diceroll.mp3'
import cardSound from '../flip.mp3'
import cards from '../cards.json'
import { HighlightContext } from '../global/HighlightContext'


function Dice() {
  const { currentPositionValue, setCurrentPositionValue } = useContext(
    PlayerPositionContext
  )  
  const {highlight, setHighlight} = useContext(HighlightContext)
  const { days, setDays } = useContext(DaysContext)
  const { currentTile, setCurrentTile } = useContext(TileContext)
  const { hasAnswered, setHasAnswered } = useContext(HasAnsweredContext)
  const { currentCard, setCurrentCard } = useContext(CurrentCardContext)
  const [dice, setDice] = useState(imgs[0])
  const audio = new Audio(sound)
  const flip = new Audio(cardSound)

  const rollTheDice = () => {
    if (hasAnswered === false) return

    const newDice = Math.floor(Math.random() * imgs.length)
    const diceValue = newDice + 1

    setDice(imgs[newDice])
    setPlayerPosition(diceValue)

    audio.play()
  }

  const setPlayerPosition = (diceValue) => {

    setCurrentPositionValue(prevstate => {
      const newValue = prevstate + diceValue

      days.forEach((day) => {
        if (newValue === day.number) {
          setCurrentTile({ color: day.color, number: day.number })
          setHasAnswered(false)
          let card;

            if (day.color === 'blue') {
              card = createRandomCard('customer-card')
              doActions(true, true)
            } else if (day.color === 'orange') {
              card = createRandomCard('daily-stand-up-card')
              doActions(true, true)
            } else if (day.color === 'white') {
              card = createRandomCard('normal-day-card')
              setHasAnswered(true)
              doActions(true, false)
            } else if (day.color === 'red') {
              card = createRandomCard('day-of-illness-card')
              setHasAnswered(true)
              doActions(true, true)
            }

          setCurrentCard(card)
        }
      })
      
      return newValue
    })
  }

  const doActions = (highlight, audio) => {
    setTimeout(() => {
      if(highlight && audio) {
        flip.play()
        setHighlight(true)
      } else if(highlight && !audio) {
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
