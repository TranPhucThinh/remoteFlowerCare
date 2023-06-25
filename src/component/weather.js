import axios from 'axios'
import { useEffect, useState } from 'react'

const API_KEY = '14a2e8a4d572074e04d7536831be18c4' // Replace with your actual API key

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        )
        setWeatherData(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            fetchWeatherData(latitude, longitude)
          },
          (error) => {
            console.log(error)
          }
        )
      } else {
        console.log('Geolocation is not supported by this browser.')
      }
    }

    getCurrentLocation()

    const interval = setInterval(getCurrentLocation, 300000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      {weatherData ? (
        <div>
          <h2>Current Weather</h2>
          <p>Location: {weatherData.name}</p>
          <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  )
}

export default Weather
