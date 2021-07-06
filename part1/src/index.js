import React from 'react'
import ReactDOM from 'react-dom'

const Header =(prop)=> (
  <h1>{prop.course}</h1>
)

const Part = (prop)=> (
  <p>
  {prop.part1} {prop.exercise1}
  </p>
)


const Content = prop =>  (
  <>
  <p>
  {prop.part1} {prop.exercise1}
  </p>
  <p>
  {prop.part2} {prop.exercise2}
  </p>
  <p>
  {prop.part3} {prop.exercise3}
  </p>
  </>
)

const Total = prop => (
  <p>
   Number of exercices {prop.ex1 + prop.ex2 + prop.ex3}
  </p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercise1={exercises1} part2={part2} exercise2={exercises2} part3={part3} exercise3={exercises3}/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))