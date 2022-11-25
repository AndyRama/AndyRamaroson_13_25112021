import React from "react";
import "./Navbar.scss"
import logo from './../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import IconUser from "../Icons/IconUser";

function NavBar() {
  return (
    <Link className="main-nav">
      <Link className="main-nav-logo"  to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link className="main-nav-item" to="/Login/">
          <IconUser/>
          Sign In
        </Link>
      </div>
    </Link>
  )
}

export default NavBar