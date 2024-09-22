import React, { useContext, useRef, useState } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import WeatherReport from "./WeatherReport";

import { ClipLoader } from "react-spinners";

const Weather = () => {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const getWeatherRef = useRef("");
  const { setWeather } = useContext(WeatherContext);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleGetValue = async () => {
    const getWeather = (getWeatherRef.current = inputValue);
    const apiKey = "148e1c6d60fb5df73f308cc886d4fe6c";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${getWeather}&appid=${apiKey}`;

    if (inputValue !== "") {
      try {
        const img = document.querySelector(".weather-report");
        img.style.display = "block";
        setIsLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        setInputValue("");
        if (data.cod === 200) {
          setWeather({
            temperature: Math.round(data.main.temp - 273.15) + "°C",
            location: data.name,
            imgUrl:
              "https://openweathermap.org/img/wn/" +
              data.weather[0].icon +
              "@4x.png",
            description: data.weather[0].description,
          });
        } else {
          setWeather({
            imgUrl:
              "data:image/png;base64,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",
            location: data.message,
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <input value={inputValue} onChange={handleInputValue} type="text" />
      <button onClick={handleGetValue}>Search</button>
      <br />
      <div className="weather-report">
        {isLoading ? (
          <ClipLoader
            size={100}
            height="80"
            width="80"
            color="white"
            ariaLabel="loading"
          />
        ) : (
          <>
            <WeatherReport />
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
