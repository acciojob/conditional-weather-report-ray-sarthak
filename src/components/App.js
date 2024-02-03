
import React,{useState} from "react";
import './../styles/App.css';
import Axios from "axios";
import Weather from "./Weather";

const URL= "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY="1e618748a0cf1d21311cfde6a1c33507";
const App = () => {
const [searchInput,setSearchInput]=useState("");
const [weatherData,setWeatherData]=useState({});

    function getSearch(e){
      e.preventDefault();
      Axios.get(`${URL}${searchInput}&appid=${API_KEY}`)
      .then((res)=>setWeatherData(res))
      .catch((err)=>console.log(err));
      setSearchInput("");

    }


  return (
    <div>
        {/* Do not remove the main div */}


        <form onSubmit={getSearch}>
          <input className="search" type="text" placeholder="Enter a city" onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}></input>
        </form>
        <Weather data={weatherData}/>
        <h1>Hello</h1>
    </div>
  )
}

export default App
