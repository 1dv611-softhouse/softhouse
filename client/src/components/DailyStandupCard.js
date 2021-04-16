import customer from '../pictures/customer.png'

function DailyStandupCard() {
  return (
    <div className="card-holder daily-standup-card">
      <img src={customer} alt="Customer" width="90px" className="customerPic" />
    </div>
  )
}

export default DailyStandupCard
