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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
 

  return (
    <div>
      <Header course={course}/>
      <Content part1={parts[0].name} exercises1={parts[0].exercises} part2={parts[1].name} exercises2={parts[1].exercises} part3={parts[2].name} exercises3={parts[2].exercises}/>
      <Total ex1={parts[0].exercises} ex2={parts[1].exercises} ex3={parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))