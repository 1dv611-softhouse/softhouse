import '../styles/active-card.css'
import { CurrentCardContext } from '../global/CurrentCardContext'
import { TileContext } from '../global/TileContext'
import { HasAnsweredContext } from '../global/HasAnsweredContext'
import cards from '../cards.json'
import sound from '../flip.mp3'
import { useContext, useEffect, useState } from 'react'

function ActiveCard() {
  const audio = new Audio(sound)
  const { currentCard, setCurrentCard } = useContext(CurrentCardContext)
  const { currentTile, setCurrentTile } = useContext(TileContext)
  const { hasAnswered, setHasAnswered } = useContext(HasAnsweredContext)
  const [cardTitle, setCardTitle] = useState('')
  const [toggle, setToggle] = useState('')
  const [highlight, setHighlight] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (currentTile.color === 'blue') {
        audio.play()

        const card = createRandomCard('customer-card')

        if (card.alternatives) {
          setHasAnswered(false)
        }

        setCurrentCard(card)
        setCardTitle('Customer')
      } else if (currentTile.color === 'orange') {
        audio.play()

        const card = createRandomCard('daily-stand-up-card')

        if (card.alternatives) {
          setHasAnswered(false)
        }

        setCurrentCard(card)
        setCardTitle('Daily Stand Up')
      } else if (currentTile.color === 'white') {
        setHighlight(true)

        const card = createRandomCard('normal-day-card')

        setCurrentCard(card)
        setCardTitle('Normal Day')
      } else if (currentTile.color === '') {
        audio.play()

        const card = createRandomCard('day-of-illness-card')

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
    return customerCards[randomValue]
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
    // setHasAnswered(false)
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
  }

  const handleToggle = (e) => {
    setToggle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setHasAnswered(true)

    //iterera currentcard alternatives.
    //if answer = toggle ändra velocity according to answer
    currentCard.alternatives.forEach((alternative) => {
      // console.log(alternative)
      // if(alternative === toggle) {
      //   console.log('Alt: ' + alternative)
      //   console.log('Toggle: ' + toggle)
      // }
    })
  }

  return (
    <div className={highlight ? 'card-highlight' : 'card'}>{renderCard()}</div>
  )
}

export default ActiveCard
