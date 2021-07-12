import React from "react"
import "./Found.css";

const Found = (props)=>{

    if (props.array.length>10){
        return (<p>Too many matches, specify another filter</p>)
    }

    else if (props.array.length>1 && props.array.length<10){
        return (                 
            <>
            {props.text}
            {props.array.map(elem=> <p key={elem.numericCode}>{elem.name}</p>)}
            
            </>
        )

        }
    else if(props.array.length===1){
       
        return (
            <>
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
            </div>
            )}
            </>
        )
    }
    else{
        return (
            <>
            <p>Write something</p>
            </>
        )
    }
}

export default Found;