import '../../styles/active-card.css'
import { CurrentCardContext } from '../../global/CurrentCardContext'
import { HasAnsweredContext } from '../../global/HasAnsweredContext'
import { VelocityContext } from '../../global/VelocityContext'
import { VelocityListContext } from '../../global/VelocityListContext'
import { HighlightContext } from '../../global/HighlightContext'
import { PlayerPositionContext } from '../../global/PlayerPositionContext'
import { TileContext } from '../../global/TileContext'
import { StorypointsContext } from '../../global/StorypointsContext'
import info from '../../pictures/info.png'

import { setPlayerState } from '../../Models/StateModel'

import { useContext, useState, useEffect } from 'react'

function ActiveCard() {
  // const { currentCard } = useContext(CurrentCardContext)
  const { hasAnswered, setHasAnswered } = useContext(HasAnsweredContext)
  // const { currentVelocity, setCurrentVelocity } = useContext(VelocityContext)
  const { velocityList, addToVelovityList } = useContext(VelocityListContext)
  const { highlight } = useContext(HighlightContext)

  const { currentPositionValue, setCurrentPositionValue } = useContext(
    PlayerPositionContext
  )
  const { currentTile, setCurrentTile } = useContext(TileContext)
  const { currentCard, setCurrentCard } = useContext(CurrentCardContext)
  const { currentStorypoints, setCurrentStorypoints } =
    useContext(StorypointsContext)
  const { currentVelocity, setCurrentVelocity } = useContext(VelocityContext)

  const [toggle, setToggle] = useState('')
  const [consequence, setConsequence] = useState('')
  const [points, setPoints] = useState(0)

  useEffect(() => {
    // TODO: Tycker det är fult att denna if-sats görs både här och nere i renderNoAlternatives(). Men vet inte hur jag ska göra.
    // Om jag gör changeVelocity(currentCard.velocity) i renderNoAlternatives() tas det bort velocity poäng flera ggr.
    if (
      currentCard.category === 'day-of-illness-card' ||
      currentCard.category === 'customer-card' ||
      currentCard.category === 'daily-stand-up-card'
    ) {
      if (currentCard.alternatives === undefined) {
        changeVelocity(currentCard.velocity)
      }
    }
  }, [currentCard])

  const renderCard = () => {
    if (currentCard.alternatives) {
      return renderAlternatives()
    } else {
      return renderNoAlternatives()
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

  const renderNoAlternatives = () => {
    if (currentCard.category === 'normal-day-card') {
      return renderNormalDay()
    } else if (
      currentCard.category === 'day-of-illness-card' ||
      currentCard.category === 'customer-card' ||
      currentCard.category === 'daily-stand-up-card'
    ) {
      return (
        <>
          <h1 className="card-header">{currentCard.title}</h1>
          <p className="active-card-question">{currentCard.information}</p>
          <div className="fun-fact-wrapper">
            <div className="icon-fun-fact"></div>

            <div className="text-fun-fact">
              <p className="fun-fact">{currentCard.consequence}</p>
            </div>
          </div>
        </>
      )
    } else {
      return <h1 className="card-header">Click dice to start the game</h1>
    }
  }

  const renderNormalDay = () => {
    return (
      <>
        <h1 className="card-header">{currentCard.title}</h1>
        <p className="active-card-question">{currentCard.information}</p>
        <div className="fun-fact-wrapper">
          <div className="icon-fun-fact">
            <img alt="information" src={info} />
          </div>

          <div className="text-fun-fact">
            <p className="fun-fact">{currentCard.funFact}</p>
          </div>
        </div>
      </>
    )
  }

  const handleToggle = (e) => {
    setToggle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    currentCard.alternatives.forEach((alternative) => {
      if (alternative.answer === toggle) {
        if (currentCard.category !== 'normal-day-card') {
          changeVelocity(alternative.velocity)
        } else {
          setPoints(points + alternative.points)
        }
        setConsequence(alternative.consequence)
      }
    })

    setHasAnswered(true)
  }

  const changeVelocity = (velocityToAdd) => {
    if (currentVelocity + velocityToAdd <= 0) {
      setCurrentVelocity(0)
    } else {
      setCurrentVelocity(currentVelocity + velocityToAdd)
    }

    addToVelovityList([...velocityList, currentVelocity])
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
      <div className={highlight ? 'card card-highlight' : 'card'}>
        {renderCard()}
      </div>
    </>
  )
}

export default ActiveCard
