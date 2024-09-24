import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [weatherForecast, setWeatherForecast] = useState([]);
  return (
    <WeatherContext.Provider
      value={{ weather, setWeather, weatherForecast, setWeatherForecast }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
