import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards' 

export default function App() {
  const [cities,setCities] = useState([]);
  const apiKey= "4ae2636d8dfbdc3044bede63951a019b";

  function onSearch(city){
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
     .then((response)=>response.json())
     .then((recurso)=>{
       if(recurso.main){
         const newCity = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
         };
         setCities((cities)=> [...cities, newCity]);
        } else {
          alert("Ciudad no encontrada")
        }
     })
  }
  function onClose(id) {
    setCities(oldCities => oldCities.filter( c => c.id !=id) )
  }
  
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <Cards onClose={onClose} cities={cities}/>
    </div>
  );
}
