import '../styles/active-card.css'
import { CurrentCardContext } from '../global/CurrentCardContext'
import { HasAnsweredContext } from '../global/HasAnsweredContext'
import { VelocityContext } from '../global/VelocityContext'
import { HighlightContext } from '../global/HighlightContext'

import { useContext, useState } from 'react'

function ActiveCard() {

  const { currentCard, setCurrentCard } = useContext(CurrentCardContext)
  const { hasAnswered, setHasAnswered } = useContext(HasAnsweredContext)
  const { currentVelocity, setCurrentVelocity } = useContext(VelocityContext)
  const {highlight, setHighlight} = useContext(HighlightContext)
  const [toggle, setToggle] = useState('')
  const [consequence, setConsequence] = useState('')

  const renderCard = () => {
    if (currentCard.alternatives) {
      return renderAlternatives()
    } else {
      if (currentCard.category === 'normal-day-card') {
        return (
          <>
            <h1 className="card-header">{currentCard.title}</h1>
            <p className="active-card-question">{currentCard.information}</p>
            <p className="fun-fact">{currentCard.funFact}</p>
          </>
        )
      } else if (currentCard.category === 'day-of-illness-card') {
        return (
          <>
            <h1 className="card-header">{currentCard.title}</h1>
            <p className="active-card-question">{currentCard.information}</p>
            <p className="fun-fact">{currentCard.consequence}</p>
          </>
        )
      } else {
        return (
          <p>Click dice to start the game</p>
        )
      }
    }
  }

  const renderAlternatives = () => {
    if (!hasAnswered) {
      return (
        <>
          <h1 className="card-header">{currentCard.title}</h1>

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
                    required
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
      <div className={highlight ? 'card-highlight' : 'card'}>
        {renderCard()}
      </div>
    </>
  )
}

export default ActiveCard
