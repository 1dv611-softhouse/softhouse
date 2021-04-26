import "../styles/cards.css";
import customers from "../pictures/customer.png";
import cards from "../cards.json";
import { CurrentCardContext } from "../global/CurrentCardContext";
import { useState, useContext } from "react";

function CostumerCard() {
  const { currentCard, setCurrentCard } = useContext(CurrentCardContext);
  const [renderedCards, setReneredCards] = useState([]);

  const getCard = () => {
    // customer cards
    const customerCards = cards.filter((el) => el.category === "customer-card");

    // randomize arrayen
    const randomValue = Math.floor(Math.random() * customerCards.length);

    const card = customerCards[randomValue];

    const id = card._id;

    // Om man inte ska kunna rendera samma kort flera gånger:
    // if (renderedCards.includes(id)) {
    //   return;
    // } else {
    //   setReneredCards([...renderedCards, id]);
    //   setCurrentCard(card);
    // }

    setCurrentCard(card);
  };

  return (
    <div className="card-holder customer-card">
      <img
        src={customers}
        alt="Customers"
        width="90px"
        className="customersPic"
        onClick={() => getCard()}
      />
    </div>
  );
}

export default CostumerCard;
