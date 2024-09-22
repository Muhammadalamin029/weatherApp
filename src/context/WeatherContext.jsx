import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContextProvider;
