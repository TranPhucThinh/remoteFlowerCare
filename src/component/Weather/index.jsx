import React from 'react'
import { Card } from 'antd'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { BiWind } from 'react-icons/bi'
import { WiHumidity } from 'react-icons/wi'
import { BsFillCloudRainHeavyFill } from 'react-icons/bs'
import { FaTemperatureHigh } from 'react-icons/fa'

import './weather.scss'

const Weather = () => {
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
            <p>10:30 AM</p>
          </div>
          <div className="weather__content--icon">
            <BsFillCloudSunFill className="weather__icon" />
          </div>
        </div>
        <div className="weather__details">
          <div className="weather__details--item">
            <div className="item__icon">
              <FaTemperatureHigh className="icon" />
            </div>
            <div className="item__desc">
              <p>Nhiêt độ</p>
              <p>18oC</p>
            </div>
          </div>
          <div className="weather__details--item">
            <div className="item__icon">
              <BiWind className="icon" />
            </div>
            <div className="item__desc">
              <p>Tốc độ gió</p>
              <p>18 km.h</p>
            </div>
          </div>
          <div className="weather__details--item">
            <div className="item__icon">
              <WiHumidity className="icon" />
            </div>
            <div className="item__desc">
              <p>Độ ẩm</p>
              <p>32%</p>
            </div>
          </div>
          <div className="weather__details--item">
            <div className="item__icon">
              <BsFillCloudRainHeavyFill className="icon" />
            </div>
            <div className="item__desc">
              <p>Khả năng mưa</p>
              <p>32%</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Weather
