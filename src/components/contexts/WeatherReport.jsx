import React, { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

const WeatherReport = () => {
  const { weather } = useContext(WeatherContext);
  return (
    <div className="weather">
      <img src={weather.imgUrl} className="img" />
      <h3>{weather.temperature}</h3>
      <h1>{weather.location}</h1>
      <p>{weather.description}</p>
    </div>
  );
};

export default WeatherReport;
