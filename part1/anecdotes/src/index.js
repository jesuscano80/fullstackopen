import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const points= Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0);

const copy=[...points];

const Button= ({func, name})=> (
  <button onClick={func}>{name}</button>
)

const Title = ({name}) => (
  <h1>{name}</h1>
)

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [most, setMost] = useState(0);
  
  
  const randomAnecdote= ()=>{
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const vote= ()=>{    
    setSelected(copy[selected]+=1);
    setMost(copy.indexOf(Math.max(...copy)));
    

  }
  return (
    <div>
      <Title name="Anecdote of the day"></Title>
      {props.anecdotes[selected]}
      <p>has {copy[selected]} votes. </p>
      <br/>
      <Button func={vote} name="vote"></Button>
      <Button func={randomAnecdote} name="random"></Button>
      <Title name="Anecdote with most votes"></Title>
      <p>{props.anecdotes[most]}</p>
      
      
    </div>
  )
}



ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)