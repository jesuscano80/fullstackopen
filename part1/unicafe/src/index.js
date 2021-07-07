import React, {useState} from 'react';
import ReactDOM from 'react-dom';
const Title= ({text}) =>{return (
  <h1>{text}</h1>)
}

const Button = ({text, clickHandler}) => (
  <button onClick={clickHandler}> {text}</button>
)
const Display = ({text, counter, symbol}) =>(
  <p> {text} {counter} {symbol}</p>
  )
const Statistics = (props) => {console.log(props); return(
  <div>
        <Title text="statistics"></Title>
        <Display text="Good" counter={props.statistics.good}></Display>
        <Display text="Neutral" counter={props.statistics.neutral}></Display>
        <Display text="Bad" counter={props.statistics.bad}></Display>
        <Display text="All" counter={props.statistics.total}></Display>
        <Display text="Average" counter={props.statistics.average}></Display>
        <Display text="Positive" counter={props.statistics.positive} symbol="%"></Display>
 </div>
)}
const App = ()=>{
  const [good,setGood]=useState(0);
  const [bad,setBad]=useState(0);
  const [neutral, setNeutral]=useState(0);
  const statistics={
  good: good,
  bad,
  neutral,
  total:  bad + good + neutral,
  difference: good - bad,
  average: (good-bad / (bad+good+neutral)).toFixed(2),
  positive: ((good *100)/(bad+good+neutral)).toFixed(2)
  }

  const goodHandler = ()=>{
    setGood(good + 1)
  }
  const neutralHandler= ()=>{
    setNeutral(neutral + 1)
  }
  const badHandler= ()=>{
    setBad(bad + 1)
  }
  if (statistics.total===0){
    return (<div>
      <Title text="give feedback"></Title>
      <Button text="Good" clickHandler={goodHandler}></Button>
      <Button text="Neutral" clickHandler={neutralHandler}></Button>
      <Button text="Bad" clickHandler={badHandler}></Button>
      <Title text="statistics"></Title>
    <p>No data available</p>
      </div>
      )
  }
  
  return (<div>
        <Title text="give feedback"></Title>
        <Button text="Good" clickHandler={goodHandler}></Button>
        <Button text="Neutral" clickHandler={neutralHandler}></Button>
        <Button text="Bad" clickHandler={badHandler}></Button>
        <Statistics statistics={statistics}></Statistics>        
        
  </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

