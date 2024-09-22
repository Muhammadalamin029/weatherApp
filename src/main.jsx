import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import WeatherContextProvider from "./context/WeatherContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </StrictMode>
);
