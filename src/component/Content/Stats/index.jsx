import { child, get, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { database } from '../../../firebaseConfig'

import StatItems from '../components/StatItems'

const Stats = () => {
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
    fetchMoistureData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="stats__wrapper">
      <p className="stats__header">Thông Số</p>
      <p className="stats__sub--header">
        Hãy theo dõi các thông số vườn hoa của bạn nào.
      </p>
      <StatItems
        lightValue={lightValue}
        tempValue={tempValue}
        humiValue={humiValue}
        moistureValue={moistureValue}
      />
    </div>
  )
}

export default Stats
