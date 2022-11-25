import React from "react";
import "./Header.scss"

function Header() {
  return (
    <header className="welcom">      
      <h1>Welcome back<br />Tony Jarvis!</h1>
      <button className="edit-button">Edit Name</button>
    </header>       
  )
}

export default Header