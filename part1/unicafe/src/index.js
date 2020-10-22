import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div><h2>{props.value}</h2></div>
const DisplayText = props => <div>{props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  if(props.good == 0 && props.neutral == 0 && props.bad == 0){
    return(    <div>
      <DisplayText value = {'No feedback given'}/>
      </div>
  ) }
  else{
  /// ...
return(

    <table>
      <tr>
    <td>good</td>
    <td>{props.good} </td>
    </tr>
    <tr>
    <td>neutral</td>
    <td>{props.neutral} </td>
    </tr>
    <tr>
    <td>bad</td>
    <td>{props.bad} </td>
    </tr>
    <tr>
    <td>all</td>
    <td>{props.good+props.neutral+props.bad} </td>
    </tr>
    <tr>
    <td>average</td>
    <td>{((props.good-props.bad)/(props.good+props.neutral+props.bad))} </td>
    </tr>
    <tr>
    <td>positive</td>
    <td>{((props.good)*100/(props.good+props.neutral+props.bad))} </td>
    </tr>
   </table>
  )
}
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const title1 = 'give feedback'
  const title2 = 'statistics'
  return (
    <div>
      <Display value={title1} />
     <Button handleClick={() => setGood(good+1)} text="good" />
      <Button handleClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button handleClick={() => setBad(bad+1)} text="bad" />
 
      <Display value={title2} />
      <p>
      <Statistics neutral = {neutral} good = { good} bad={bad}/>
      </p>    
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
