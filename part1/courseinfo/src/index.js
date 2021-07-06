import React from 'react'
import ReactDOM from 'react-dom'

const Header =(prop)=> (
  <h1>{prop.course}</h1>
)

const Part = (prop)=> (
  <p>
  {prop.part} {prop.exercise}
  </p>
)


const Content = (props) =>  (
  <>
  <p>
  <Part part={props.part1} exercise={props.exercises1} />
  </p>
  <p>
  <Part part={props.part2} exercise={props.exercises2} />
  </p>
  <p>
  <Part part={props.part3} exercise={props.exercises3} />
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
 

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1.name} exercises1={part1.exercises} part2={part2.name} exercises2={part2.exercises} part3={part3.name} exercises3={part3.exercises}/>
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))