import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import NavBar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import SignIn from '../pages/SignIn/SignIn'
import Profile from '../pages/Profile'

function Layout() {
  return (
    <div className="Layout">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Layout
