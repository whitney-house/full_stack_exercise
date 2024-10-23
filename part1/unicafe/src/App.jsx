import { useState } from 'react' //import useState function

//new components can also be created
// Button handles the 
// functionality of each feedback submission button.
const Button =({click, text})=>{
  return(
    <button onClick={click}>
      {text}
      </button>
  )

}

//StatisticLine for displaying a single statistic,
// e.g. the average score.
const StatisticLine = ({text, value})=>{
  return (
    <>
    <td>{text}</td>
    <td>{value}</td>
    </>
  )
}

//receive state values from App as props
const Statistics = ({good, neutral, bad}) =>{
  const all = good + neutral + bad
  const reviews = good *1 + bad * (-1)

  

  if (all===0){
    return (
      <div>
          <h1>statistics</h1>
          <p>No feedback given</p>
      </div>
    
    )
  }

  return (
    <div>
       <h1>statistics</h1>
      <tr>
      <StatisticLine text="good" value={good} />
      </tr>
      <tr>
         <StatisticLine text="neutral" value={neutral} />
      </tr>
      <tr>
         <StatisticLine text="bad" value={bad} />
      </tr>
      <tr> 
      <StatisticLine text="all" value={all} />
      </tr>
      <tr> 
        <StatisticLine text="average" value={(reviews / all).toFixed(1)} />
      </tr>
      <tr>
        <StatisticLine text="positive" value={`${((good / all) * 100).toFixed(1)} %`}/>
      </tr>
     
    
      
      
      
    </div>
  )
}



const App = () => {
  // save clicks of each button to its own state
  // below are variables
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 

  return (
    <div>
      <h1>give feedback </h1>
      <Button click={()=>setGood(good +1)} text={'good'}/>
      <Button click={() => setNeutral(neutral + 1)} text="neutral" />
      <Button click={() => setBad(bad + 1)} text="bad" />
      {/* pass state values to Statistics component */}
      <Statistics good={good} neutral={neutral} bad={bad} />
      
   
    </div>
  )
}

export default App