import "../styles/cards.css";
import customers from "../pictures/customer.png";

function CostumerCard() {
  return (
    <div className="card-holder customer-card">
      <img
        src={customers}
        alt="Customers"
        width="90px"
        className="customersPic"
      />
    </div>
  );
}

export default CostumerCard;
