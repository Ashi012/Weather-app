import React from 'react'
import { formatToLocalTime } from '../../services/WeatherService'

function TimeLoc({weather: {dt, timezone}}) {
  return (
    
    <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt,timezone)}
        </p>
      </div>
      
  )
}

export default TimeLoc