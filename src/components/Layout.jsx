import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Header = lazy(() => import('../pages/Header'))
const Main = lazy(() => import('../pages/Main'))
const Weather = lazy(() => import('../pages/Weather'))
const Rosary = lazy(() => import('../pages/Rosary'))
function Layout() {
    return (
        <div  >
            <Header />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='weather' element={<Weather />} />
                <Route path='rosary' element={<Rosary />} />
            </Routes>

        </div>
    )
}

export default Layout;
