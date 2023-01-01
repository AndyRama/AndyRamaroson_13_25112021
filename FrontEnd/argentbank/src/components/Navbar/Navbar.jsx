import React from 'react'
import './Navbar.scss'
import logo from './../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import IconUser from '../Icons/IconUser'
import { user } from '../../utils/store'
import { useDispatch } from 'react-redux'
import { logout } from '../../_store/middlewares/authMiddelware'
import IconLogout from '../Icons/IconLogout'

//after login user is Auth and i can {useDispatch} and {Logout}

function NavBar() {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <section className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!user ? (
          <Link className="main-nav-item" to="/Login">
            <IconUser className="sign-in-icon" />
            Sign In
          </Link>
        ) : (
          <ul className="main-nav-item">
            <li>
              <Link to="/profile">
                <IconUser />
                <span className="logged-user">{user}</span>
              </Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogout}>
                <IconLogout className="sign-out-icon" />
                Sign Out
              </Link>
            </li>
          </ul>
        )}
      </div>
    </section>
  )
}

export default NavBar
