import customers from '../pictures/customers.png'

function CostumerCard() {
  return (
    <div className="costumerCard">
      <img
        src={customers}
        alt="Customers"
        width="90px"
        className="customersPic"
      />
    </div>
  )
}

export default CostumerCard
