import React from "react";
import "./Navbar.scss"
import logo from './../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav class="main-nav">
      <Link class="main-nav-logo"  to="/">
        <img
          class="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link class="main-nav-item" to="/Login">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  )
}

export default NavBar