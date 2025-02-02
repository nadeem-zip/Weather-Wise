import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import  summerImage from "./assets/summer.avif"
import  winterImage from "./assets/winter.avif"
import  rainImage from "./assets/rainy.avif"
import hazeImage from "./assets/haze.avif"
import fallBack from "./assets/fallBack.avif"

let WeatherApp = () => {
    let[weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feels_like:28,
        humidity:79,
        temp:25,
        temp_max:29,
        temp_min:23,
        description:"Haze",
        wind: 15
    })
    let updateWeather=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    const getBackgroundImage = () => {
      const { temp, humidity, description } = weatherInfo;
  
      if (description.includes("rain") || description.includes("drizzle")) {
        return rainImage;
      }
      if (description.includes("haze") || description.includes("mist")) {
        return hazeImage;
      }
      if (temp > 30) {
        return summerImage;
      }
      if (temp < 15) {
        return winterImage;
      }
      return fallBack; // Fallback image
    };
  return (
    <>
    <div style={{
      backgroundImage: `url(${getBackgroundImage()})`,
      backgroundSize: 'cover', // Specify size separately
      backgroundPosition: 'center', // Specify position separately
      backgroundRepeat: 'no-repeat', // Prevent repetition
      height: '100vh',
      width: '100vw',
    
        }} >
    <SearchBox updateWeather={updateWeather}/>
    <InfoBox info={weatherInfo}/>
    </div>
  
    </>
  )
}

export default WeatherApp