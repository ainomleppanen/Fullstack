import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import personsService from "../services/puhelinnumerot"
import App from "../app"


const PersonForm = ({ persons }) => {
  return (
    <div>
      {persons.map((person, i)=>
        <Person key={person.name} person={person}  />
      )}
    </div>
  )
}

const Person = ({person}) => {
  return (
    <p>
      {person.name} {person.number}
     </p>    
  )
}

export default PersonForm 

  
  