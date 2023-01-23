import { Routes, Route } from 'react-router-dom'

import NavBar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn/SignIn'
// eslint-disable-next-line no-unused-vars
import Profile from '../pages/Profile'
import AuthCheck from '../authCheck/authCheck'

function Layout() {
  return (
    <div className="Layout">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route
          path="/profile"
          element={<AuthCheck Component={<p>Profile</p>} />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default Layout
