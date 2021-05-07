import '../styles/retrospective.css'
import retrospective from '../retrospective.json'

function Retrospective() {
  const getTitle = () => {
    return retrospective.mainInformation.title
  }

  const getPreamble = () => {
    return retrospective.mainInformation.description
  }

  const generateRandomAlternatives = () => {
    const randomValue = Math.floor(
      Math.random() * retrospective.retrospectives[0].level1.length
    )

    const randomCategory = retrospective.retrospectives[0].level1[randomValue]

    return randomCategory
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <div className="retrospective-layer">
      <div className="retrospective-frame">
        <h1>{getTitle()}</h1>
        <p>{getPreamble()}</p>
        <form className="retrospective-form" onSubmit={(e) => handleSubmit(e)}>
          {generateRandomAlternatives().categories.map((alternative, index) => {
            return (
              <>
                <label className="retrospective-checkbox-container" for={index}>
                  <input
                    className="retrospective-checkbox"
                    type="checkbox"
                    key={index}
                  />
                  <span class="checkmark-retrospective-custom"></span>
                  {alternative.strategy} [{alternative.cost}]
                </label>
              </>
            )
          })}
          <input
            type="submit"
            value="Invest story points"
            className="form-button-retrospective"
          />
        </form>
      </div>
    </div>
  )
}

export default Retrospective
