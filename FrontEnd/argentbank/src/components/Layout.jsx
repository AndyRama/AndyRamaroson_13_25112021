import { Routes, Route } from 'react-router-dom'
// import PrivateRoute from './../private/Route'

import Home from '../pages/Home'
import NavBar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import SignIn from '../pages/SignIn/SignIn'
import Profil from '../pages/Profil'

function Layout() {
  return (
    <div className="Layout">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/Profil" element={<Profil />} />
        {/* <PrivateRoute exact path="/Profil" element={<Profil />}>
          {' '}
        </PrivateRoute> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default Layout
