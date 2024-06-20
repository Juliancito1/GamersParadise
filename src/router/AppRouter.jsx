import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NavbarApp from '../components/NavbarApp'
import FooterApp from '../components/FooterApp'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <NavbarApp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    <FooterApp/>
    </BrowserRouter>
  )
}

export default AppRouter