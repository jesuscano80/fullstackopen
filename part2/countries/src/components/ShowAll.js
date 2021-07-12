import React from "react";

const Showall = (props)=>{
    console.log(props);
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
        </div>)}
    </>)
}

export default Showall;