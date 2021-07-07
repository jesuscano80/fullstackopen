import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({onClick, text}) =>{
  return ( 
    <button onClick={onClick}>
      {text}
    </button>
  )
}
const Display = props => <div>{props.value}</div>
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks]= useState([])
  
  const handleLeftClick = ()=>{
    setAllClicks(allClicks.concat("L"));
    setLeft(left +1)
  }

  const handleRightClick = ()=>{
    setAllClicks(allClicks.concat("R"));
    setRight(right + 1);
  }
  return (
    <div>
      <Display value={left}></Display>
      <Button onClick={handleLeftClick} text="Left" />
      <Button onClick={handleRightClick} text="Right" />
      <Display value={right}></Display>
      <History allClicks={allClicks} />
    </div>
    
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)