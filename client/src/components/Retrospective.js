import '../styles/retrospective.css'
import retrospective from '../retrospective.json'
import { VelocityContext } from '../global/VelocityContext'
import { StorypointsContext } from '../global/StorypointsContext'

import { useState, useContext, useEffect } from 'react'

function Retrospective() {
  const { currentVelocity, setCurrentVelocity } = useContext(VelocityContext)
  const { currentStorypoints, setCurrentStorypoints } = useContext(StorypointsContext)
  const [toggle, setToggle] = useState([])

  const getTitle = () => {
    return retrospective.mainInformation.title
  }

  const getPreamble = () => {
    return retrospective.mainInformation.description
  }

  const generateRandomAlternatives = () => {
    //TODO kolla av storypoint = vilken level av retro man ska få
    const randomValue = Math.floor(
      Math.random() * retrospective.retrospectives[0].level1.length
    )
    const randomCategory = retrospective.retrospectives[0].level1[randomValue]
   
    return randomCategory
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
    alert('This is a test!!!')
    // Hämta array med svar. T.ex. 
    alert(toggle)
  }

  return (
    <div className="retrospective-layer">
      <div className="retrospective-frame">
        <h1>{getTitle()}</h1>
        <p>{getPreamble()}</p>
        <form className="retrospective-form" onSubmit={(e) => handleSubmit(e)}>
          {generateRandomAlternatives().map((alternative, index) => {
            return (
              <>
                <label class="retrospective-checkbox-container">
                  {alternative.strategy} [{alternative.cost}]
                  <input type="checkbox" 
                    value={alternative.strategy}
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
