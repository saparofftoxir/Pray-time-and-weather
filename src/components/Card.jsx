import React from 'react'

function Card({ item }) {
    return (
        <div className='w-full  h-44 mt-1 border-gray-700'>
            <div className='w-full h-12 border flex items-center justify-center border-gray-700'>
                <h1 className='text-white text-sm'>{item.date_for}</h1>

            </div>



            <div className='w-full flex border-gray-700 '>
                <div className='border-gray-700 border gap-y-1 flex flex-col items-center w-full h-36 justify-center'>
                    <img className='w-14 h-14' src="./src/assets/fajr.svg" alt="" />
                    <h1 className='text-white'>Bomdod</h1>
                    <h1 className='text-white text-2xl'>{item.fajr}</h1>

                </div>

                <div className='border-gray-700 border gap-y-1 flex flex-col items-center w-full h-36 justify-center'>
                    <img className='w-14 h-14' src="./src/assets/sunrise.svg" alt="" />
                    <h1 className='text-white'>Quyosh chiqishi</h1>
                    <h1 className='text-white text-2xl'>{item.shurooq}</h1>
                </div>
                <div className='border-gray-700 border gap-y-1 flex flex-col items-center w-full h-36 justify-center'>
                    <img className='w-14 h-14' src="./src/assets/zuhr.svg" alt="" />
                    <h1 className='text-white'>Peshin</h1>
                    <h1 className='text-white text-2xl'>{item.dhuhr}</h1>
                </div>
                <div className='border-gray-700 border gap-y-1 flex flex-col items-center w-full h-36 justify-center'>
                    <img className='w-14 h-14' src="./src/assets/asr.svg" alt="" />
                    <h1 className='text-white'>Asr</h1>
                    <h1 className='text-white text-2xl'>{item.asr}</h1>

                </div>
                <div className='border-gray-700 border gap-y-1 flex flex-col items-center w-full h-36 justify-center'>
                    <img className='w-14 h-14' src="./src/assets/magrib.svg" alt="" />
                    <h1 className='text-white'>Shom</h1>
                    <h1 className='text-white text-2xl'>{item.maghrib}</h1>

                </div>
                <div className='border-gray-700 border gap-y-1 flex flex-col items-center justify-center w-full h-36'>
                    <img className='w-14 h-14' src="./src/assets/isha.svg" alt="" />
                    <h1 className='text-white'>Xufton</h1>
                    <h1 className='text-white text-2xl'>{item.isha}</h1>
                </div>
            </div>
        </div>
    )
}

export default Card
