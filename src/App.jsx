import { useState } from "react";
import "./App.css";
import WeatherCard from "./weathercard";

function App() {
  const [city, setCity] = useState("");

  function handleSearch() {
    console.log("Searching for:", city);
  }

  return (
    <div className="weather-app">
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>
      <WeatherCard />
    </div>
  );
}

export default App;