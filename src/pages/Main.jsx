import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
// import useFetchDatas from '../hooks/UseFetchData';

function Main() {
    const [data,setData]=useState(null)
    const API_KEY = "bba7ab9bd035d049765305fef6073578";
    useEffect(() => {
        axios.get(`https://muslimsalat.com/${'Toshkent'}.json?key=${API_KEY}`)
            .then(res => setData(res.data))
    }, [])
    console.log(data)

    return (
        <div className='w-full h-screen'>
            <div className='w-4/6 min-h-96 bg-slate-950 flex flex-col justify-center items-center  p-7 m-auto mt-1'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-white font-semibold text-2xl flex jutify-center'>Toshkent shahri uchun namoz vaqti</h1>
                    <h1 className='text-green-500 pt-3'>11.03.2022 - Juma</h1>
                </div>
                <div className='w-ful relative min-h-56 flex flex-col mt-7 items-center justify-center'>
                    <img className='w-96' src="./src/assets/Ellipse_2.png" alt="" />
                    <div className=' pt-5 absolute flex justify-center flex-col items-center'>
                        <h2 className='text-gray-500 '>Namoz vaqti</h2>
                        <div className='flex flex-col pt-10 items-center justify-center'>
                            <div className='text-white flex  text-7xl gap-x-5'>
                                <h1>02</h1>
                                <h1>55</h1>
                            </div>
                            <div className='flex items-center justify-center gap-x-16 pt-2 text-gray-500'>
                                <h1>Soat</h1>
                                <h1>Daqiqa</h1>
                            </div>
                        </div>
                    </div>
                </div>
                    {data?.items.map((item,index)=><Card key={index} item={item}/>)}
                
            </div>

        </div>
    )
}

export default Main;