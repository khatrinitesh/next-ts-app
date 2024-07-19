import axios from 'axios';

const API_KEY = '0c1907a9ee37b190dcccec9cf3d9142c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';


export interface WeatherData {
    name: string; // City name
    main: {
      temp: number; // Temperature in Kelvin
      humidity: number; // Humidity in percentage
    };
    weather: {
      main: string; // Weather condition (e.g., Clouds, Clear)
      description: string; // Weather description
    }[];
  }

  export const fetchWeatherData = async (city: string): Promise<WeatherData | null> => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric', // Use metric units (Celcius)
        },
      });
      return response.data as WeatherData;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
    }
  };