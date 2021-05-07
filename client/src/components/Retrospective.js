import '../styles/retrospective.css'
import retrospective from '../retrospective.json'

function Retrospective() {
  function getTitle() {
    return retrospective.mainInformation.title
  }

  function getPreamble() {
    return retrospective.mainInformation.description
  }

  function generateRandomAlternatives() {
    const randomValue = Math.floor(
      Math.random() * retrospective.retrospectives[0].level1.length
    )

    const randomCategory = retrospective.retrospectives[0].level1[randomValue]

    return randomCategory
  }

  return (
    <div className="retrospective-layer">
      <div className="retrospective-frame">
        <h1>{getTitle()}</h1>
        <p>{getPreamble()}</p>
        <form className="retrospective-form">
          {generateRandomAlternatives().categories.map((alternative) => {
            return (
              <>
                <input type="checkbox" id="jens" />
                <label for="jens">
                  {alternative.strategy} [{alternative.cost}]
                </label>
                <br></br>
              </>
            )
          })}
          <input type="submit" value="Invest story points" className="form-button-retrospective"/>
        </form>
      </div>
    </div>
  )
}

export default Retrospective
