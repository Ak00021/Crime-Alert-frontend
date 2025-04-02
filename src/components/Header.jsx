"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaShieldAlt, FaBars } from "react-icons/fa"
import "./Header.css"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <FaShieldAlt className="logo-icon" />
          <Link to='/' className="logo-text">SafeAlert</Link>
        </div>

        <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          <FaBars />
        </button>

        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <Link to='/how-it-works' onClick={() => setIsMenuOpen(false)}>
                How It Works
              </Link>
            </li>
            <li>
              <Link to='/report'  onClick={() => setIsMenuOpen(false)}>
                Report Crime
              </Link>
            </li>
            <li>
              <Link to='/alerts'  onClick={() => setIsMenuOpen(false)}>
                View Alerts
              </Link>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <Link to='/login' className="login-button">
            Login
          </Link>
          <Link to='/signup' className="signup-button">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

