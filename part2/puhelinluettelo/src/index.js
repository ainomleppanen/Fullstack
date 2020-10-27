import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import PersonForm from './components/personForm'
import App from './app'
import axios from 'axios'
import personsService from "./services/puhelinnumerot"

const persons = [
  {id: -1, name: 'Arto Hellas', number: '20200110173031098'}
]

ReactDOM.render(<App persons = {persons} />, document.getElementById('root'))