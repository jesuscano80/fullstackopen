import React, {useState} from 'react';
import ReactDOM from 'react-dom';
const Title= ({text}) =>{return (
  <h1>{text}</h1>)
}

const Button = ({text, clickHandler}) => (
  <button onClick={clickHandler}> {text}</button>
)
const Display = ({text, counter}) =>(
  <p> {text} {counter}</p>
  )

const App = ()=>{
  const [good,setGood]=useState(0);
  const [bad,setBad]=useState(0);
  const [neutral, setNeutral]=useState(0);

  const goodHandler = ()=>{
    setGood(good + 1)
  }
  const neutralHandler= ()=>{
    setNeutral(neutral + 1)
  }
  const badHandler= ()=>{
    setBad(bad + 1)
  }
  return (<div>
        <Title text="give feedback"></Title>
        <Button text="Good" clickHandler={goodHandler}></Button>
        <Button text="Neutral" clickHandler={neutralHandler}></Button>
        <Button text="Bad" clickHandler={badHandler}></Button>
        <Title text="statistics"></Title>
        <Display text="Good" counter={good}></Display>
        <Display text="Neutral" counter={neutral}></Display>
        <Display text="Bad" counter={bad}></Display>
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
