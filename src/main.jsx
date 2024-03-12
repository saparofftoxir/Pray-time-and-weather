import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StateContextProvider from './context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Suspense fallback={<div>loading...</div>}>
    <StateContextProvider>
    <App />
    </StateContextProvider>
  </Suspense>
  </BrowserRouter>
)