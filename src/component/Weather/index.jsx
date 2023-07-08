import { Card } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BiWind } from 'react-icons/bi'
import { FaTemperatureHigh } from 'react-icons/fa'
import { WiHumidity } from 'react-icons/wi'

import moment from 'moment'
import './weather.scss'

const API_KEY = '14a2e8a4d572074e04d7536831be18c4' // Replace with your actual API key

const Weather = () => {
  const realTime = moment().format('MMMM Do YYYY, h:mm:ss a')
  const [currentTime, setCurrentTime] = useState(realTime)
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

  const handleTime = () => {
    const realTime = moment().format('MMMM Do YYYY, h:mm:ss a')
    setCurrentTime(realTime)
  }
  setInterval(handleTime, 1000)

  return (
    <Card
      style={{
        width: 240,
        borderRadius: 12,
        backgroundColor: '#40a9ff',
        boxShadow: 'rgb(64, 169, 255) 3px 4px 16px 0px',
      }}
    >
      <div className="weather__wrapper">
        <div className="weather__content">
          <div className="weather__content--text">
            <h2>Đà Nẵng</h2>
            <p>{currentTime}</p>
          </div>
          <div className="weather__content--icon">
            {/* <BsFillCloudSunFill className="weather__icon" /> */}
            <img
              src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@2x.png`}
              alt="icon-weather"
            />
          </div>
        </div>
        <div className="weather__details">
          <div className="weather__details--item">
            <div className="item__icon">
              <FaTemperatureHigh className="icon" />
            </div>
            <div className="item__desc">
              <p>Nhiêt độ</p>
              <p>{(weatherData?.main?.temp - 273.15).toFixed(2)}°C</p>
            </div>
          </div>
          <div className="weather__details--item">
            <div className="item__icon">
              <BiWind className="icon" />
            </div>
            <div className="item__desc">
              <p>Tốc độ gió</p>
              <p>{(weatherData?.wind?.speed * 3.6).toFixed(2)} km/h</p>
            </div>
          </div>
          <div className="weather__details--item">
            <div className="item__icon">
              <WiHumidity className="icon" />
            </div>
            <div className="item__desc">
              <p>Độ ẩm</p>
              <p>{weatherData?.main?.humidity}%</p>
            </div>
          </div>
          {/* <div className="weather__details--item">
            <div className="item__icon">
              <BsFillCloudRainHeavyFill className="icon" />
            </div>
            <div className="item__desc">
              <p>Khả năng mưa</p>
              <p>32%</p>
            </div>
          </div> */}
        </div>
      </div>
    </Card>
  )
}

export default Weather
