import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'

const Button = (props) => (
  <button onClick={props.handleClick} >
    {props.text}
  </button>
)

const App = () => {

  useEffect(() => {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  const [countries, setCountries] = useState ([])
  const [visibleText, setVisibleText] = useState ('')
  const [oneCountry, setOneCountry] = useState ('')
  const [languages, setLanguages] = useState ([])
  const [weather, setWeather] = useState({location:{}, current: {}});

 const handleShowClick = (inputtiHaku) => 
  {

    setVisibleText("")

    if (inputtiHaku.length > 0)
    {

      const sCountries = countries.filter(country => country.name.toUpperCase().includes(inputtiHaku.toUpperCase()))
      setCountries(sCountries)

      if (sCountries.length > 10)
      {
        setVisibleText("Too many matches, spesify another filter")
      }
      else
      {
        if(sCountries.length == 1)
        {
          setOneCountry(sCountries[0])
          setLanguages(sCountries[0].languages)
          getWeather(sCountries[0].name)
        } else 
        {
            setCountries(sCountries)
        }
      }
    }
    else
    {
      axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
    }
    preventDefSend()
  }


  const preventDefSend = () =>{
    var form = document.getElementById("search_form")
    form.onsubmit = function (e) {
      e.preventDefault()
    }
  }

  const handleKeyDown = (event) => {
    if (event.key==='Enter'){
      var inputtiHaku = document.getElementById("countrySearch")
      handleShowClick(inputtiHaku.value)
   }
  }

  const getWeather = (city) => {
  
   const api_key = process.env.REACT_APP_WEATHER_API_KEY
   const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`
  
      axios.get(url)
      .then(response => {
        setWeather(response.data)
    
      })
  }

  if (countries.length == 1)
  {
    return (
      <div>
        <form id = 'search_form'>
          <div>
            <p>
              find countries <input id = "countrySearch" name = "nInput"  onKeyDown = {handleKeyDown}  />
            </p>
              {visibleText}
          </div>    
        </form>
        <div>
          <form id = 'oneCountry_form'>
            <div>
                <h2>{oneCountry.name} </h2>
                <p>
                capital {oneCountry.capital}
                </p>
                <p>
                population {oneCountry.population}
                </p>
                <p>
                </p>
                <h3>languages</h3>
                <p>
                </p>
                <div>
                {languages.map((language, i)=> (
                    <li key={language.name}>
                    {language.name} 
                  </li>
                ))}
                </div>
                <p>
                <img src={oneCountry.flag}  height="150" width="150" />
                </p>
                <div>
                <h3>Weather in {weather.location.name}</h3>
                <p>temperature: {weather.current.temperature} </p>
                <img src = {weather.current.weather_icons} />
                <p>wind: {weather.current.wind_speed} kph direction {weather.current.wind_dir}</p>
                </div>
            </div>

          </form>
        </div>
      </div>
    )
} else { 
  return(
  <div>
    <form id = 'search_form'>
      <div>
        <p>
          find countries <input id = "countrySearch" name = "nInput"  onKeyDown = {handleKeyDown}  />
        </p>
          {visibleText}
      </div>    
    </form>
    <form id = 'countries_form' >
      <h2>Countries</h2>
      <div>
            {countries.map((country, i)=> 
              <ul key = {country.name}>
              {country.name} 
              <Button handleClick={()=>handleShowClick(country.name)} text = 'show'/>
                </ul>
            )}
      </div>
    </form>
  </div>
)  
}

}

export default App

ReactDOM.render(<App />, document.getElementById('root'))