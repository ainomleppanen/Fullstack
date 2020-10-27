import React from 'react';
import ReactDOM from 'react-dom';


const CountryForm = ( countries ) => {
  console.log("CountryForm")
  return (

    <div>
        {countries.map((country, i)=>
        
      <country key={country.name} country={country}  />
        )}
    </div>
  )
}

const country = (props) => {
  console.log("countryssä")
  return (
    <p>
      {props.country.name} 
    </p>    
  )
}


 export default CountryForm 

  
  