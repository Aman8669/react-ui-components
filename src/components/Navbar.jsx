// Navbar.jsx
import React from 'react'
import '../Style/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#"><h1>Branding**</h1></a>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Login</a>
        <a href="#">Sign Up</a>
      </div>
    </nav>
  )
}

export default Navbar