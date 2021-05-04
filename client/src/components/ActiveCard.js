import "../styles/active-card.css";
import { CurrentCardContext } from "../global/CurrentCardContext";
import { TileContext } from '../global/TileContext'
import cards from "../cards.json";
import sound from "../flip.mp3";
import { useContext, useEffect, useState } from "react";

function ActiveCard() {
  const audio = new Audio(sound);
  const { currentCard, setCurrentCard } = useContext(CurrentCardContext);
  const { currentTile, setCurrentTile } = useContext(TileContext);
  const [cardTitle, setCardTitle] = useState("");
  const [toggle, setToggle] = useState("");
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    //TODO: Bryt ut för att inte gå emot DRY
    let customerCards;
    let randomValue;
    let card;

    setTimeout(() => { 
      setHighlight(false)
      const cardDiv = document.querySelector('.card')
      console.log(cardDiv)
      if (currentTile.color === "blue") {
        setHighlight(true)
        audio.play();
        customerCards = cards.filter((el) => el.category === "customer-card");
      
        randomValue = Math.floor(Math.random() * customerCards.length);
        card = customerCards[randomValue];
    
        setCurrentCard(card);
        setCardTitle("Customer");
      } else if (currentTile.color === "orange") {
        setHighlight(true)
        audio.play();
        customerCards = cards.filter(
          (el) => el.category === "daily-stand-up-card"
        );
      
        randomValue = Math.floor(Math.random() * customerCards.length);
        card = customerCards[randomValue];

        setCurrentCard(card);
        setCardTitle("Daily Stand Up");
      } else if (currentTile.color === "white") {
        customerCards = cards.filter(
          (el) => el.category === "normal-day-card"
        );
    
        randomValue = Math.floor(Math.random() * customerCards.length);
        card = customerCards[randomValue];

        setCurrentCard(card);
        setCardTitle("Normal Day");
      } else if (currentTile.color === ""){
        setHighlight(true)
        audio.play();
        customerCards = cards.filter(
          (el) => el.category === "day-of-illness-card"
        );
    
        randomValue = Math.floor(Math.random() * customerCards.length);
        card = customerCards[randomValue];

        setCurrentCard(card);
        setCardTitle("Day of illness");
      }
    }, 500);

    setTimeout(() => {
      setHighlight(false)
    }, 1000)
  
  }, [currentTile]);

  const renderCard = () => {
    if(currentCard.alternatives) {
      return renderAlternatives()
    } else {
      if(currentCard.category === 'normal-day-card') {
        return (
          <>
            <h1 className="card-header">{cardTitle}</h1>
            <p className="active-card-question">{currentCard.information}</p>
            <p className="fun-fact">{currentCard.funFact}</p>
          </>
        );
      }
  
    }
  };

  const renderAlternatives = () => {
    return (
      <>
        <h1 className="card-header">{cardTitle}</h1>

        <p className="active-card-question">{currentCard.question}</p>

        <form onSubmit={e => handleSubmit(e)}>
          {currentCard.alternatives.map(alternative => (<>
            <label className="card-label-container">
              {alternative.answer}
              <input type="radio" value={alternative.answer} onChange={(e) => handleToggle(e)} name="radio" />
              <span className="alt"></span>
             </label>
          </>))}

          <input type="submit" value="Reply" className="btn" />
        </form>
      </>
    );
  }

  const handleToggle = (e) => {
    setToggle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(toggle)
  }

  return <div className={highlight ? "card-highlight" : "card"}>{renderCard()}</div>;
}

export default ActiveCard;
