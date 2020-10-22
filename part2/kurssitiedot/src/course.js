import { notEqual } from 'assert';
import React from 'react';

const Course = ({course}) => {
  return (
    <div>
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course} />
    </div>
  )
}

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({ course }) => {
  return (
    <div>
        {course.parts.map((part, i)=>
      <Part key={part.id} part={part}  />
      )}
    </div>
  )
}

const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises} 
      </p>    
    )
  }

  const Total = ({ course }) => {
    var sum = 0
    {course.parts.map((part, i)=>
      sum=sum + part.exercises
    )}
    return(
      <p>
        total of {sum} exercises 
      </p>
    ) 
  }

  
  export default Course 

  
  