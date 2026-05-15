// Navbar.jsx
import React from 'react'
import '../Style/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link><h1>Branding**</h1></Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/product">Product</Link>
      </div>
    </nav>
  )
}

export default Navbar