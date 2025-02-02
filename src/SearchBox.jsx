import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css"
let SearchBox = ({updateWeather}) => {
  let[cityName,setCityName]=useState("");
  const apiUrl="http://api.openweathermap.org/data/2.5/weather"
  const apiKey="1a46b0a3e0358180f6b57791a5fe405f"
  let getWeather= async()=>{
   let responce= await fetch(`${apiUrl}?q=${cityName}&appid=${apiKey}&units=metric`);
   let jsonResponce=await responce.json();
   console.log(jsonResponce)
   let details={
    feels_like:jsonResponce.main.feels_like,
    humidity:jsonResponce.main.humidity,
    temp:jsonResponce.main.temp,
    temp_max:jsonResponce.main.temp_max,
    temp_min:jsonResponce.main.temp_min,
    description:jsonResponce.weather[0].description,
    wind: jsonResponce.wind.speed,
    city:jsonResponce.name
  }
  console.log(details)
  return details;
  }

  let handleChange=(e)=>{
             setCityName(e.target.value);
             e.target.value="";
  }
  let handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(cityName);
    setCityName("")
   let result=await getWeather();
   updateWeather(result);
    // console.log(details);
  }
  return (
    <div className='searchBox'>
      <span id="heading">WeatherWise-</span><p> "Stay Ahead of the Storm."</p>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City" variant="outlined" required onChange={handleChange} value={cityName} / >
        <br /><br />
        <Button variant="contained" type='submit' >Search</Button>
        </form>
    </div>
  )
}

export default SearchBox;