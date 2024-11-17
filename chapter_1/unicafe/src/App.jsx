import { useState } from 'react'



const Statistics = ({ good, neutral, bad }) => {
  const total = (good + bad * -1 + neutral * 0) / (good + bad + neutral);
  const percentage = (good / (good + neutral + bad)) * 100;

  const Statisticline  = (props) => 
    <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>



  

  if (good == 0 && bad == 0 && neutral == 0) {
  return (
    <div>
      <p>No Feedback given</p>
    </div>
  )
}

  return (
    <div>
      <table>
        <tbody>
      <Statisticline text="good" value={good} />
      <Statisticline text="neutral" value={neutral} />
      <Statisticline text="bad" value={bad} />
      <Statisticline text="average" value={total} />
      <Statisticline text="percentage" value={`${percentage}%`} />
      </tbody>
      </table>
    </div>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  const Button = (props) => (
    
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )






  return (
    <div>
      <h3>give feedback</h3>
      <Button handleClick={() => {setGood(good + 1);}} text="good" />
      <Button handleClick={() => {setNeutral(neutral + 1);}} text="neutral" />
      <Button handleClick={() => {setBad(bad + 1);}} text="bad" />
      
      <h3>Statistics</h3>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App