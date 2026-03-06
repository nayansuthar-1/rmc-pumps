import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Pumps from './pages/Pumps'
import Orders from './pages/Orders'

const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Dashboard />} />
        <Route path='/pumps' element={<Pumps />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
