import axios from 'axios'
import React, { useEffect, useState } from 'react'
import WeatherCard from '../components/WeatherCard';

function Weather() {
    const [data, setData] = useState(null)
    const Api_Key = "75ced55da7174c4764fbb1897da6af5b";
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${"Toshkent"}&appid=${Api_Key}`)
            .then(res => setData(res.data))
    }, [])
    console.log(data)
    return (
        <div className='w-full bg-slate-950 h-screen '>


            <div className='w-3/6 min-h-80 bg-indigo-95 flex flex-col mt-10 items-center m-auto'>
                <div className='flex flex-col items-center p-1'>
                    <h1 className='text-white font-bold  text-2xl'>Ob-havo ma'lumotlari</h1>
                    <h2 className='text-gray-600'>Yakshanba - 21 mart</h2>
                </div>
                <div className='flex flex-col  mt-5 gap-y-4'>
                    <div className='w-96 p-3 flex items-center justify-between bg-gray-800 rounded-lg'>
                        <div className='flex flex-col gap-y-1'>
                            <h1 className='font-bold text-white text-7xl'>23</h1>
                            <h2 className='text-gray-600'>O‘zbekiston, Toshkent</h2>
                        </div>
                        <div className='w-flex-1 h-34'>
                            <img className='flex w-28' src="./src/assets/Group.svg" alt="" />
                        </div>
                    </div>
                    <WeatherCard />


                </div>
            </div>


        </div>
    )
}

export default Weather
