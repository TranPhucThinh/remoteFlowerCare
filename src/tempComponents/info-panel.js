import React, { useState, useEffect } from 'react'
import { Col, Row } from 'antd'
import { AlertFilled } from '@ant-design/icons'
import { SiRainmeter } from 'react-icons/si'
import { WiRaindrops } from 'react-icons/wi'
import { FaTemperatureLow } from 'react-icons/fa'
import { database } from '../firebaseConfig'
import { ref, child, get } from 'firebase/database'

const InfoPanel = () => {
  const [lightValue, setLightValue] = useState('')
  const [tempValue, setTempValue] = useState('')
  const [humiValue, setHumiValue] = useState('')
  const [moistureValue, setMoistureValue] = useState('')

  const dbRef = ref(database)
  const fetchLightData = async () => {
    await get(child(dbRef, `light`))
      .then((snapshot) => {
        const response = snapshot.val()
        if (snapshot.exists()) {
          setLightValue(response)
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  setInterval(fetchLightData, 1000)

  const fetchTempData = async () => {
    await get(child(dbRef, `temperature`))
      .then((snapshot) => {
        const response = snapshot.val()
        if (snapshot.exists()) {
          setTempValue(response)
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  setInterval(fetchTempData, 1000)

  const fetchHumiData = async () => {
    await get(child(dbRef, `humidity`))
      .then((snapshot) => {
        const response = snapshot.val()
        if (snapshot.exists()) {
          setHumiValue(response)
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  setInterval(fetchHumiData, 1000)

  const fetchMoistureData = async () => {
    await get(child(dbRef, `moisture`))
      .then((snapshot) => {
        const response = snapshot.val()
        if (snapshot.exists()) {
          setMoistureValue(response)
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  setInterval(fetchMoistureData, 1000)

  useEffect(() => {
    fetchLightData()
    fetchTempData()
    fetchHumiData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <p className="static-tittle">Thông số cảm biến</p>
      <Row gutter={[8, 8]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6} xl={5} className="col-item">
          <div className="temp-wrapper">
            <div className="temp-title">
              <span style={{ color: 'white' }}>NHIỆT ĐỘ</span>
              <span
                className="icon icon-temp"
                style={{ color: 'white', marginLeft: '10px' }}
              >
                <FaTemperatureLow />
              </span>
            </div>
            <p className="temp-value">{tempValue}&#8451;</p>
          </div>
        </Col>
        <Col span={1}></Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={5} className="col-item">
          <div className="temp-wrapper">
            <div className="temp-title">
              <span style={{ color: 'white' }}>ĐỘ ẨM KHÔNG KHÍ</span>
              <span
                className="icon icon-air"
                style={{ color: 'white', marginLeft: '10px' }}
              >
                <SiRainmeter />
              </span>
            </div>
            <p className="temp-value">{humiValue}%</p>
          </div>
        </Col>
        <Col span={1}></Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={5} className="col-item">
          <div className="temp-wrapper">
            <div className="temp-title">
              <span style={{ color: 'white' }}>ĐỘ ẨM ĐẤT</span>
              <span
                className="icon icon-soil"
                style={{ color: 'white', marginLeft: '10px' }}
              >
                <WiRaindrops />
              </span>
            </div>
            <p className="temp-value">{moistureValue} %</p>
          </div>
        </Col>
        <Col span={1}></Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={5} className="col-item">
          <div className="temp-wrapper">
            <div className="temp-title">
              <span style={{ color: 'white' }}>ĐỘ SÁNG</span>
              <span
                className="icon icon-light"
                style={{ color: 'white', marginLeft: '10px' }}
              >
                <AlertFilled />
              </span>
            </div>
            <p className="temp-value">{lightValue} lux</p>
          </div>
        </Col>
      </Row>
    </>
  )
}
export default InfoPanel
