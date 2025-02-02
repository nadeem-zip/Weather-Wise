import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import hazeImage from "./assets/haze.avif"
import rainyImage from "./assets/rainy.avif"
import fallBack from "./assets/fallBack.avif"
import summerImage from "./assets/summer.avif"
import winterImage from "./assets/winter.avif"

import "./InfoBox.css"

let InfoBox = ({info}) => {
  const getWeatherImage = (description, temp, humidity) => {
    if (description.includes("rain") || description.includes("drizzle")) {
      return rainyImage;
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

  const weatherImage = getWeatherImage(info.description, info.temp, info.humidity);

    
  return (
    <>
    <div className="cardContainer">
    <Card sx={{ maxWidth: 360}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={weatherImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <div id="info">
            <h4>{info.description}</h4>
            <h4> Temp: {info.temp}&deg;C</h4>
            <h4> Feels Like: {info.feels_like}&deg;C</h4>
            <h4>Max Temp: {info.temp_max}&deg;C</h4>
            <h4>Min Temo: {info.temp_min}&deg;C</h4>
            <h4>Humidity: {info.humidity}%</h4>
            <h4>Wind Speed:{info.wind} Kmph</h4>
          </div>
        
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    
    </>
  )
}

export default InfoBox