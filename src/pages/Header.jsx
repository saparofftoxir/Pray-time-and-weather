import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className='w-full h-14 flex items-center justify-between px-60 bg-slate-950'>
            <ul className='flex items-center justify-between'>
                <li>
                    <NavLink to={'/'} className='text- flex text-white items-center font-bold gap-x-1'>
                        <img className='w-9 h-9' src="./src/assets/dua.svg" alt="" />
                        MyNamaz
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center text-white gap-x-7'>
                <li>
                    <NavLink to={'/weather'} className=' flex items-center'>
                        Ob-havo
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/rosary'} className=' flex items-center'>
                        Tasbeh
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header
