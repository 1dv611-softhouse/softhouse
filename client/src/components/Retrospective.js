import '../styles/retrospective.css'
import retrospectiveJSON from '../retrospective.json'
import { VelocityContext } from '../global/VelocityContext'
import { StorypointsContext } from '../global/StorypointsContext'
import { RetrospectiveContext } from '../global/RetrospectiveContext'
import { useState, useContext, useEffect } from 'react'

function Retrospective() {
  const { currentVelocity, setCurrentVelocity } = useContext(VelocityContext)
  const { currentStorypoints, setCurrentStorypoints } = useContext(StorypointsContext)
  const { retrospective, setRetrospective } = useContext(RetrospectiveContext)
  const [toggle, setToggle] = useState([])

  const getTitle = () => {
    return retrospectiveJSON.mainInformation.title
  }

  const getPreamble = () => {
    return retrospectiveJSON.mainInformation.description
  }

  const generateLevelStrategies = () => {
    //TODO kolla av storypoint = vilken level av strategies man ska få
   
    return retrospectiveJSON.retrospectives[0].level1
  }

  const handleSubmit = (e) => {
    e.preventDefault()
        // setCurrentVelocity()
      // setCurrentStorypoints(currentStorypoints + )
  }

  const handleToggle = (e) => {
    
    const strategy = e.target.value 

    if(!toggle.includes(strategy)) {
      setToggle([...toggle, strategy])
      
    } else if(toggle.includes(strategy)) {
      const index = toggle.indexOf(strategy)

      if (index !== -1) {
        toggle.splice(index, 1);
        setToggle(toggle)
      }
    }
  }

  const generateConsequenses = () => {
    let div =  document.querySelector('.retrospective-frame')
    div.textContent = ''

    const header = document.createElement('h1')
    const text = document.createElement('p')
    header.textContent = 'Consequences'
    text.textContent = 'You have now made your investment choises. The consequences of your choises are displayed below.'
    
    div.appendChild(header)
    div.appendChild(text)
  }

  return (
    <div className="retrospective-layer">
      <div className="retrospective-frame">
        <h1>{getTitle()}</h1>

        <p>{getPreamble()}</p>
        <form className="retrospective-form" onSubmit={(e) => handleSubmit(e)}>
          {generateLevelStrategies().map((strategy, index) => {
            return (
              <>
                <label class="retrospective-checkbox-container">
                  {strategy.strategy} [{strategy.cost}]
                  <input type="checkbox" 
                    value={strategy.strategy}
                    onChange={(e) => handleToggle(e)}
                    />
                  <span class="checkmark-retrospective-custom"></span>
                </label>
              </>
            )
          })}
          <input
            type="submit"
            value="Invest story points"
            className="form-button-retrospective"
            onClick={() => generateConsequenses()}
          />
        </form>
        
      </div>
    </div>
  )
}

export default Retrospective
