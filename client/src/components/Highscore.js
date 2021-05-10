import '../styles/highscore.css'

import { useEffect, useState } from 'react'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

function Highscore() {
  const [highscore, setHighscore] = useState([])
  useEffect(() => {
    fetch('https://irv6hogkji.execute-api.eu-west-1.amazonaws.com/Production')
      .then(response => response.json())
      .then(data => {
        console.log(data.body.Items.sort((a,b) => b-a).slice(0,4))
        setHighscore(data.body.Items)
      });
  }, [])
  
  try {
    
  } catch (error) {
    console.log(error.message)
  }
  return (
    <div className="highscore-container">
      <h1 className="highscore-header">Highscore</h1>
      {/* <Get url="https://irv6hogkji.execute-api.eu-west-1.amazonaws.com/Production" headers={{"Access-Control-Allow-Origin": "*", "Content-Type": "text/plain"}}>
        {(error, response, isLoading, makeRequest, axios) => {
          if(error) {
            return (<div>Something bad happened: {error.message} <button onClick={() => makeRequest({ params: { reload: true } })}>Retry</button></div>)
          }
          else if(isLoading) {
            return (<div>Loading...</div>)
          }
          else if(response !== null) {
            return (<div>{console.log(response)} <button onClick={() => makeRequest({ params: { refresh: true } })}>Refresh</button></div>)
          }
          return (<div>Default message before request is made.</div>)
        }}
      </Get> */}
      <ol className="highscore-list">
        {highscore.map((score) => {
          return (
            <li>
              {score.username} <span>{score.score}</span>
            </li>
          )
        })}
        
        {/* <li>
          håkanmelin33 <span>38</span>
        </li>
        <li>
          jenseriksson <span>56</span>
        </li>
        <li>
          malin_josefsson <span>102</span>
        </li>
        <li>
          davidnilsson <span>234</span>
        </li>
        <li>
          tinapersson <span>254</span>
        </li>
        <li>
          hansrosqvist <span>376</span>
        </li>
        <li>
          linajakobsben <span>523</span>
        </li>
        <li>
          perlindqvist <span>700</span>
        </li>
        <li>
          jennydahlström <span>1200</span>
        </li> */}
      </ol>
    </div>
  )
}

export default Highscore
