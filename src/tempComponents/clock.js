import React, {useState} from 'react'
import moment from 'moment';

const Clock = () => {
  const realTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  const [currentTime, setCurrentTime] = useState(realTime);

  const handleTime = () => {
    const realTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    setCurrentTime(realTime);
  }
  setInterval(handleTime, 1000);
  
  return (
    <div className='clock-wrapper'>{currentTime}</div>
  )
}

export default Clock;