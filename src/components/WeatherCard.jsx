import React from 'react'

function WeatherCard() {
  return (
    <div className='w-96 p-1 bg-gray-800 rounded-lg'>
                            
                       
    <div className='flex'>
    <div className='flex flex-col gap-y-1 items-center justify-center'>
        <img className='flex w-16' src="./src/assets/thnderstorm.svg" alt="" />
        <p className='text-white text-xl'>3</p>
        <p className='text-gray-500 text-sm'>Du</p>
    </div>
    <div className='flex flex-col gap-y-1 items-center justify-center'>
        <img className='flex w-16' src="./src/assets/rainy.svg" alt="" />
        <p className='text-white text-xl'>5</p>
        <p className='text-gray-500 text-sm'>Se</p>
    </div>
    <div className='flex flex-col gap-y-1 items-center justify-center'>
        <img className='flex w-16' src="./src/assets/night_storm.svg" alt="" />
        <p className='text-white text-xl'>7</p>
        <p className='text-gray-500 text-sm'>Cho</p>
    </div>
    <div className='flex flex-col gap-y-1 items-center justify-center'>
        <img className='flex w-16' src="./src/assets/partly_day_storm.svg" alt="" />
        <p className='text-white text-xl'>10</p>
        <p className='text-gray-500 text-sm'>Pa</p>
    </div>
    <div className='flex flex-col gap-y-1 items-center justify-center'>
        <img className='flex w-16' src="./src/assets/snowy.svg" alt="" />
        <p className='text-white text-xl'>7</p>
        <p className='text-gray-500 text-sm'>Ju</p>
    </div>
    <div className='flex flex-col gap-y-1 items-center justify-center'>
        <img className='flex w-16' src="./src/assets/Groupp.svg" alt="" />
        <p className='text-white text-xl'>12</p>
        <p className='text-gray-500 text-sm'>Sha</p>
    </div>
</div>
</div>
  )
}

export default WeatherCard
