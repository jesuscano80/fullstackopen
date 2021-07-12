import React, {useEffect, useState} from "react";
import axios from "axios";
require('dotenv').config()

const Weather = (props)=>{
const [weather,setWeather]=useState([]);

const getWeather=()=>{
    const params = {
        access_key: process.env.REACT_APP_API_KEY,
        query: props.capital
      }
      
      axios.get('http://api.weatherstack.com/current', {params})
        .then(response => {
          const apiResponse = response.data;
          console.log(apiResponse);
          console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
          setWeather([apiResponse]);
        }).catch(error => {
          console.log(error);
        });
}
useEffect(getWeather,[weather]);




console.log(props);
return (
    <div>
        {weather.map(wea=> <div key={wea.location.name}>
                        <p>Temperature {wea.location.name} : {wea.current.temperature} </p>
                        <img src={wea.current.weather_icons[0]} alt={wea.location.name}></img>
                        <p>Wind: {wea.current.wind_speed} mph, direction {wea.current.wind_direction} </p>
                        </div>
                    )}
        </div>
)

}

export default Weather;