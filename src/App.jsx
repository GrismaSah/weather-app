import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <div className="weather-app">
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
      />

      <button>Search</button>

      <div className="weather-card">
        <h2>Bangalore</h2>
        <h3>28°C</h3>
        <p>Partly Cloudy</p>
        <p>Humidity: 65%</p>
        <p>Wind: 12 km/h</p>
      </div>
    </div>
  );
}

export default App;
