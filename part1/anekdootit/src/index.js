import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const Display = props => (
  <div >
    has {props.array} votes
    <p></p>
  </div>
)

const DisplayText = props => (
  <div >
    <h2>{props.text}</h2>
    <p></p>
  </div>
)

const Vote = ({onClick, text, value}) => (
  <button onClick={onClick}>
    {text}
  </button>

    )

 
  
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVotes] = useState(0)
  const [maxVote, setMaxVote] = useState(0)
  const [mostVote, setMostVote] = useState(0)
  var maxIndex = 0
   
  const handleNextClick = () => {
    //otetaan äänet talteen 
    points[selected] = vote
    //vaihdetaan anekdootti
    var row = Math.floor(Math.random() * Math.floor(6))
    setSelected(row)
    //asetetaan uusi äänimäärä
    setVotes(points[row])

  }

  const setWinner = () => {
    console.log("setWinner")
    //haetaan suurin äänimäärä
    var amount = Math.max(...points)
    setMaxVote(amount)
    //haetaan teksti
    setMostVote(anecdotes[points.indexOf(amount) ])
  }

  const handleVoteClick = () => {
    setVotes(vote+1)
    points[selected] = vote+1
    setWinner()
  }

  return (
    <div>
      <p>
      <DisplayText text = {'Anecdote of the day'} />
      </p>
      <p>
      {props.anecdotes[selected]}
      </p>
      <br></br>
      <Display array = {vote} />
      <Vote onClick={handleVoteClick} text = 'vote'  />
      <Button onClick={handleNextClick} text = 'next anecdote'/>
      <p>
      <DisplayText text = {'Anecdote with most votes'} />
      </p>
      <DisplayText text = {mostVote} />
      <Display array = {maxVote} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const points = [0,0,0,0,0,0]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
