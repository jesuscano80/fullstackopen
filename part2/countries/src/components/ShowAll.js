import React from "react";
import Weather from "./Weather";

const Showall = (props)=>{
    
    return (<>
    {props.array.map(elem=> 
        
        <div key={elem.numericCode}>
        <h1 >{elem.name}</h1>
        <p>Capital: {elem.capital}</p>
        <p>Population: {elem.population}</p>
        <h3>Languajes:</h3>
        <ul>
        {elem.languages.map(languaje=> <li key={languaje.name}>{languaje.name}</li>)}
        </ul>
        <img id="theimage" src={elem.flag} alt={elem.name}></img>
        <Weather city={elem.name} capital={elem.capital}></Weather>
        </div>)}
        
    </>)
}

export default Showall;