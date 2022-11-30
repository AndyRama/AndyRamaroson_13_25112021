import { Routes, Route } from 'react-router-dom'
import React from 'react'

import Home from '../pages/Home/Home'
import NavBar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Login from '../pages/Login/Login'
import Profil from '../pages/Profil/Profil'

function Layout() {
  return (
    <div className="Layout">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profil" element={<Profil />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Layout
