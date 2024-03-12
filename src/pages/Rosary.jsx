import React, { useContext } from 'react'
import RosaryCard from '../components/RosaryCard'
import { StateContext } from '../context/Context'

function Rosary() {
    const { state } = useContext(StateContext)
    return (
        <div className='w-full h-screen bg-slate-950 flex justify-center '>
            <div className='w-3/6 h-96 mt-16 bg-green- flex flex-col items-center'>
                <h1 className='text-white text-4xl font-bold'>Tasbeh</h1>
                <div className='flex  flex-col items-center justify-center pt-5'>
                    <h2 className='text-white text-2xl'>Subhanallah</h2>
                    <h3 className='text-gray-800 font-semibold'>Alhamdulillah</h3>
                    <h4 className='text-gray-900 text-sm'>Allohu akbar</h4>
                </div>
                {state?.mentions?.map(item => <RosaryCard key={item.id} item={item} />)}


            </div>
        </div>
    )
}

export default Rosary;
