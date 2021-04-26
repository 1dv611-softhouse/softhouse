import "../styles/active-card.css";
import { CurrentCardContext } from "../global/CurrentCardContext";
import { useContext, useEffect, useState } from "react";

function ActiveCard() {
  const { currentCard, setCurrentCard } = useContext(CurrentCardContext);
  const [cardTitle, setCardTitle] = useState("");

  useEffect(() => {
    // Om kort objektet inte är tomt
    if (Object.keys(currentCard).length !== 0) {
      if (currentCard.category === "customer-card") {
        setCardTitle("Customer");
      } else if (currentCard.category === "daily-stand-up-card") {
        setCardTitle("Daily Stand Up");
      }
    }
  }, [currentCard]);

  const renderCard = () => {
    if (Object.keys(currentCard).length !== 0) {
      return (
        <>
          <h1>{cardTitle}</h1>

          <p className="active-card-question">{currentCard.question}</p>

          <form action="" method="POST">
            <label class="card-label-container">
              This is a litle alternative
              <input type="radio" checked="checked" name="radio" />
              <span class="alt"></span>
            </label>
          </form>
        </>
      );
    }
  };

  return <div className="card">{renderCard()}</div>;
}

export default ActiveCard;
