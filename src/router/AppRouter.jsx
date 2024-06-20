import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NavbarApp from '../components/NavbarApp'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <NavbarApp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter