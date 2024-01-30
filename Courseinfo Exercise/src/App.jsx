import { useState } from 'react'

import './App.css'

const Header = (props) =>{

  return(
    <div>
      <h2>{props.course.name}</h2>
    </div>
  )

}
const Content = (props) =>{

  let newContent = props.course.parts.map((part)=>{
    return <Part key={part.name} name={part.name} exercises={part.exercises} />
    
  })

  return(
    <ul>
      {newContent}
    </ul>
  )
  
}

const Part = (props) => {
  
  return(
    <li >
      <h3>{props.name}</h3>
      <p >Exercises: {props.exercises}</p>
    </li>
      
   
  )

}

const Total = (props) =>{
  const initialValue=0;
  const totalExercises =  props.course.parts.reduce(
    (total, part)=>{

      return total + part.exercises;
   
  },initialValue)
  return(
    <div>
      <p>Total Exercises: {totalExercises}</p>
    </div>
  )
  
}

function App() {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <>
      <Header course={course} />
      <Content  course={course}/>
      <Total course={course} />
    </>
  )
}

export default App
