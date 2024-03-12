import React, { useContext, useState } from 'react'
import { StateContext } from '../context/Context';

function RosaryCard({ item }) {
    const { state, dispatch } = useContext(StateContext)
    const plusHandler = () => {
        dispatch({ type: "PLUS_NUM", payload: item.id });
    }
    const clearHandler = () => {
        dispatch({ type: "CLEAR_MENTIONS", payload: { id: item.id, number: '' } });
    }
    console.log(state)
    return (
        <div className='flex flex-col'>

            <div className='w-[350px] h-36 mt-7 flex items-center justify-end px-8 bg-gray-800 rounded-xl'>
                <h1 className='font-bold text-green-500  text-5xl'>{item.number}</h1>
            </div>
            <div className='w-56 h-12 flex items-center pt-3 bg-fuchsi-900'>
                <div className='flex items-center gap-x-3'>
                    <img className='w-5 h-5' src="./src/assets/ellipse.svg" alt="" />
                    <button onClick={clearHandler} className='text-white'>Tozalash</button>
                </div>
            </div>
            <button onClick={plusHandler} className='text-white w-36 flex items-center justify-center m-auto mt-2 p-2 rounded-lg bg-green-600 hover:bg-green-500 transition'>Sanash</button>
        </div>
    )
}

export default RosaryCard;