import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Inputs from './components/page-1/Inputs';
import Image from './components/page-1/Image';
import HourlyForecast from './components/page-1/HourlyForecast';
import TimeLoc from './components/page-1/TimeLoc';
import getWeatherData from './services/WeatherService';
import getFormattedWeatherData from './services/WeatherService';
import {useEffect, useState } from 'react';


function App() {
  const [query, setQuery] = useState({ q: "chandigarh" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
  const fetchWeather = async () => {
   await getFormattedWeatherData({...query,units  }).then(
    (data) => {
      setWeather(data);
    });
  };
  fetchWeather();
}, [query , units] )

  return (
    <div className='mx-auto max-w-screen-sm mt-4 py-5 px-32 bg-gradient-to-br from-slate-900 to-gray-700  h-fit shadow-xl shadown-gray-400 rounded-3xl'>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <div>
          <TimeLoc weather={weather}/>
      <Image weather={weather}/>
      <HourlyForecast title="hourly forecast" items={weather.hourly}/>
      <HourlyForecast title="daily forecast" items={weather.daily}/>
        </div>
      )}
      
      </div>
  );
}

export default App;
