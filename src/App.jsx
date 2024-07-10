// src/App.jsx

import * as weatherService from "./services/weatherService";
import WeatherSearch from "./components/WeatherSearch";
import { useEffect, useState } from "react";
import WeatherDetails from "./components/WeatherDetails";

const App = () => {

  const [ weather, setWeather ] = useState({});

  const fetchData = async(city) => {
    const data = await weatherService.show(city);
    console.log("Data", data);
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState)
  }
console.log("State", weather);
 
useEffect(() => {

  const fetchDefaulData = async () => {
    const data = await weatherService.show("New York");
    const newWeatherState = {
      location: data.location.name,
      temperature: data.current.temp_f,
      condition: data.current.condition.text,
    };
    setWeather(newWeatherState);
  };

  fetchDefaulData();
}, [])

  return (
    <main>
<h1>Weather App</h1>
 < WeatherSearch fetchData= {fetchData}/>
 < WeatherDetails weather={weather}/>
{/* <button onClick={fetchData}>Fetch Weather Data</button> */}
    </main>
    
  );
}

export default App
