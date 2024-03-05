import React, { useState } from 'react'
import Vector from './media/1.png';
import { IoSearchCircle } from "react-icons/io5";

function WeatherApp() {
    const [cityName , setCityName] = useState("jaipur")
    const [weather , setWeather] = useState({});
    console.log(weather)
    const handleChange =(e)=>{
        setCityName(e.target.value);
    }
    const handleSearch = ()=>{
        const apiKey = "e10e48cd5c1df35f6da8d75df73a8bb5"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        if(cityName){
            fetch(url)
            .then((data)=> data.json())
            .then((res)=>setWeather(res))
            .catch((error)=>{
                console.log(error)
            })
        }
    }

  return (
    
    <div className='bg-image bg-cover bg-no-repeat h-screen flex justify-center items-center'>
      <div className='w-3/5 h-4/5 bg-[#ffffff66] rounded-lg flex'>
        <div className='w-1/2  bg-left h-full bg-cover bg-no-repeat rounded-l-lg flex flex-col justify-between'>
            <div className='flex justify-end m-4    '>
                <p className=' font-bold text-2xl'>
                    {/* {weather.name} | {weather.sys.country} */}
                </p>
            </div>
            <div className='flex justify-center'>
            {/* <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='' className='rounded-full bg-[#ffffff85] w-2/5' /> */}
            </div>
            <div className='flex justify-between m-4'>
            <div className='font-bold text-xl text-gray-200'>
            {/* <p>{weather.coord.lon}</p>
            <p>{weather.coord.lat}</p> */}
            </div>
                <div className='font-bold text-2xl text-gray-200'><p>
                    {/* {weather.main.temp}°C */}
                </p></div>
            </div>
        </div>
        <div className='h-full w-1/2'>
            <div className='h-1/5 flex justify-center items-center border-b border-gray-300 m-4'>
                {/* <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='' className='rounded-full bg-[#ffffff85] w-1/5' /> */}
            </div>
            <div className='flex border border-gray-200 rounded-lg w-3/5 mx-auto'>
                <input type='search' onChange={handleChange} value={cityName} placeholder='Search' className='bg-transparent outline-none text-white placeholder-white px-2 py-1' />
                <IoSearchCircle onClick={handleSearch} color='white' className='text-3xl cursor-pointer' />
            </div>
            <div className='text-center text-white font-semibold my-5'>
            <p>
                {/* {weather.name}, {weather.sys.country} */}
            </p>
            <p>
                {/* {weather.weather[0].description} */}
            </p>
            </div>
            <div className='flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2'>
                <p>Temp</p>
                {/* <p>{weather.main.temp}°C</p> */}
            </div>
            <div className='flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2'>
                <p>Visibility</p>
                {/* <p>{weather.visibility/1000}Km</p> */}
            </div>
            <div className='flex justify-around font-bold text-white border-b border-gray-300 m-6 p-2'>
                <p>Wind Speed</p>
                {/* <p>{weather.wind.speed}meter/sec</p> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
