"use client";
// custom hooks - state management
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
// LIBRARY
import ReactPlayer from 'react-player';
// NEXT/IMAGE
import Image from "next/image";
// NEXT/LINK
import Link from "next/link";
// WALLPAPER
import Wallpaper from "../../../assets/img/wallpaper.jpg";
// // STYLINGCSS
// import "./style.css";
// INTERFACE

// CONSTANTS
import { fetchWeatherData,WeatherData } from "./WeatherService";

const Example = () => {
      
    
  return (
    <>
       <WeatherComponent/>
    </>
  );
};

export default Example;


const WeatherComponent: React.FC = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  
    const handleSearch = async () => {
      const data = await fetchWeatherData(city);
      if (data) {
        setWeatherData(data);
      } else {
        setWeatherData(null);
        alert('Failed to fetch weather data. Please try again.');
      }
    };
    return (
      <>
      <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Weather App</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          className="border p-2 mr-2"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {weatherData && (
        <div className="bg-gray-200 p-4 rounded">
          <h2 className="text-lg font-semibold">{weatherData.name}</h2>
          <div className="mt-2">
            <p>Temperature: {weatherData.main.temp} °C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Weather: {weatherData.weather[0].main}</p>
            <p>Description: {weatherData.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
      
      </>
    );
  };