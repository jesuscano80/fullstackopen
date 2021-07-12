import axios from "axios";
import React, {useState, useEffect} from "react";
import Finder from "./Finder";
import Found from "./Found";

const App=(props)=>{
const [countries, setCountries]= useState([]);
const [found,setFound] = useState([]);
    
const initialCharge=()=>{
        axios.get("https://restcountries.eu/rest/v2/all")
        .then(response=>{
           setCountries(response.data)
        })
}

    useEffect(initialCharge, []);

    const handleInput = (event)=>{
        let arr=[];
        countries.forEach(country=>{
            let text=country.name.toLowerCase();
            if (text.search(event.target.value.toLowerCase())>=0){
                arr.push(country);
                
            }
        })
        setFound(arr)

       
  
    }

    return(
        <>
            <Finder onChange={handleInput}></Finder>
            <br></br>
            <Found text="Countries found:" array={found} set={setFound} found={found}></Found>
        </>
    )
}

export default App;