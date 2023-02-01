import React from 'react';
import {
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";
import { formatToLocalTime,iconUrlFromCode } from '../../services/WeatherService';

  
function Image({
    weather: {
      details,
      icon,
      temp,
      wind,
      temp_min,
      temp_max,
      sunrise,
      sunset,
      speed,
      humidity,
      feels_like,
      timezone,
      name,
      country,
    },
  })
{
  return (
    <div>
        <div className='justify-around items-center flex flex-row '>
        <img src={iconUrlFromCode(icon)} alt="" 
        className=''/>
        <div className='justify-around items-center flex flex-col'>
        <p className ='text-white text-2xl font-medium my-2'>{`${name}, ${country}`}</p>
        <p className ='text-white text-2xl font-light '>{details}</p>
        </div>
        </div>
        <hr className='my-3'/>
        <div className='justify-around items-center flex flex-row text-white font-medium text-xl '>
        <div className='justify-around items-center flex flex-col text-white font-medium text-xl mt-3'>
            <p>Wind</p>
            <p>{`${speed.toFixed()} km/h`}</p>
        </div>
        <div className='justify-around items-center flex flex-col text-white font-medium text-xl mt-3'>
            <p>Temperature</p>
            <p>{`${temp.toFixed()}°`}</p>
        </div>
        <div className='justify-around items-center flex flex-col text-white font-medium text-xl mt-3'>
            <p>Humidity</p>
            <p>{`${humidity.toFixed()}`}</p>
        </div>
        </div>
        <hr className='my-3'/>
{/* hgdfls hvdloxjf */}
<div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3 my-3">
        <UilSun />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>

        
        
    </div>
  )
}

export default Image;