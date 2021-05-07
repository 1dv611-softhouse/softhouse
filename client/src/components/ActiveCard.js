import '../styles/active-card.css'
import { CurrentCardContext } from '../global/CurrentCardContext'
import { TileContext } from '../global/TileContext'
import { HasAnsweredContext } from '../global/HasAnsweredContext'
import { VelocityContext } from '../global/VelocityContext'
import cards from '../cards.json'
import sound from '../flip.mp3'
import { useContext, useEffect, useState } from 'react'

function ActiveCard() {
  const audio = new Audio(sound)
  const { currentCard, setCurrentCard } = useContext(CurrentCardContext)
  const { currentTile, setCurrentTile } = useContext(TileContext)
  const { hasAnswered, setHasAnswered } = useContext(HasAnsweredContext)
  const { currentVelocity, setCurrentVelocity } = useContext(VelocityContext)
  const [cardTitle, setCardTitle] = useState('')
  const [toggle, setToggle] = useState('')
  const [highlight, setHighlight] = useState(false)
  const [consequence, setConsequence] = useState('')

  useEffect(() => {
    // Om satt här fixar tärningsbugg(en av dem)
    // setHasAnswered(false)

    setTimeout(() => {
      //Om satt här fixar konsekvensbubugg
      setHasAnswered(false)
      if (currentTile.color === 'blue') {
        setHighlight(true)
        audio.play()

        const card = createRandomCard('customer-card')

        setCurrentCard(card)
        setCardTitle('Customer')
      } else if (currentTile.color === 'orange') {
        setHighlight(true)
        audio.play()

        const card = createRandomCard('daily-stand-up-card')

        setCurrentCard(card)
        setCardTitle('Daily Stand Up')
      } else if (currentTile.color === 'white') {
        setHighlight(true)

        const card = createRandomCard('normal-day-card')

        setHasAnswered(true)
        setCurrentCard(card)
        setCardTitle('Normal Day')
      } else if (currentTile.color === '') {
        audio.play()

        const card = createRandomCard('day-of-illness-card')
        setHasAnswered(true)
        setCurrentCard(card)
        setCardTitle('Day of illness')
      }
    }, 500)

    setTimeout(() => {
      setHighlight(false)
    }, 1000)
  }, [currentTile])

  const createRandomCard = (cardCategory) => {
    const customerCards = cards.filter((el) => el.category === cardCategory)

    const randomValue = Math.floor(Math.random() * customerCards.length)

    const card = customerCards[randomValue]

    if (!card.alternatives) {
      setHasAnswered(true)
    }

    return card
  }

  const renderCard = () => {
    if (currentCard.alternatives) {
      return renderAlternatives()
    } else {
      if (currentCard.category === 'normal-day-card') {
        return (
          <>
            <h1 className="card-header">{cardTitle}</h1>
            <p className="active-card-question">{currentCard.information}</p>
            <p className="fun-fact">{currentCard.funFact}</p>
          </>
        )
      } else if (currentCard.category === 'day-of-illness-card') {
        return (
          <>
            <h1 className="card-header">{cardTitle}</h1>
            <p className="active-card-question">{currentCard.information}</p>
            <p className="fun-fact">{currentCard.consequence}</p>
          </>
        )
      }
    }
  }

  const renderAlternatives = () => {
    if (!hasAnswered) {
      return (
        <>
          <h1 className="card-header">{cardTitle}</h1>
  
          <p className="active-card-question">{currentCard.question}</p>
  
          <form onSubmit={(e) => handleSubmit(e)}>
            {currentCard.alternatives.map((alternative) => (
              <>
                <label className="card-label-container">
                  {alternative.answer}
                  <input
                    type="radio"
                    value={alternative.answer}
                    onChange={(e) => handleToggle(e)}
                    name="radio"
                  />
                  <span className="alt"></span>
                </label>
              </>
            ))}
  
            <input type="submit" value="Reply" className="btn" />
          </form>
        </>
      )
    } else {
      return renderConsequence()
    }
   
  }

  const handleToggle = (e) => {
    setToggle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    currentCard.alternatives.forEach((alternative) => {
      if (alternative.answer === toggle) {
        const velocity = alternative.velocity
        setCurrentVelocity(currentVelocity + velocity)
        setConsequence(alternative.consequence)
      }
    })

    setHasAnswered(true)
  }

  const renderConsequence = () => {
    return (
      <>
        <h1 className="card-header">Consequence</h1>
        <p className="active-card-question">{consequence}</p>
      </>
    )
  }

  return (
    <>
    <div className={highlight ? 'card-highlight' : 'card'}>{renderCard()}</div>
    </>
  )
}

export default ActiveCard
