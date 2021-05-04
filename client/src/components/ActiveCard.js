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
    // Om kort objektet inte är tomt
    if (Object.keys(currentCard).length !== 0) {

      if(currentCard.alternatives) {
        console.log(currentCard)
        return renderAlternatives()
      }
      
      // return (
      //   <>
      //     <h1>{cardTitle}</h1>

      //     <p className="active-card-question">{currentCard.question}</p>

      //     <form action="" method="POST">
      //       <label class="card-label-container">
      //         This is a litle alternative
      //         <input type="radio" checked="checked" name="radio" />
      //         <span class="alt"></span>
      //       </label>
      //     </form>
      //   </>
      // );
    } else {
      return (
        <>
          <h1>Welcome</h1>
          <br />
          <h2>Click the dice to start the game!</h2>
        </>
      );
    }
  };

  const renderAlternatives = () => {
    return (
      <>
        <h1>{cardTitle}</h1>

        <p className="active-card-question">{currentCard.question}</p>

        <form action="" method="POST">
          {currentCard.alternatives.map(alternative => (<>
           <label class="card-label-container">
            {alternative.answer}
            <input type="radio" checked="checked" name="radio" />
            <span class="alt"></span>
          </label> <br />
          </>))}
         
        </form>
      </>
    );
  }

  return <div className="card">{renderCard()}</div>;
}

export default ActiveCard;
