import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { FaShieldAlt, FaBars } from "react-icons/fa"
import {AppContext} from '../context/context.js'
import "./Header.css"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {sessionDetails,setSessionDetails}=useContext(AppContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleLogout=()=>{
    setSessionDetails({login:false});
    localStorage.removeItem("sessionDetails");
  }
  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
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
        {/* {console.log(sessionDetails.fullName)} */}
        {sessionDetails.login == false ?<div className="auth-buttons">
          <Link to='/login' className="login-button">
            Login
          </Link>
          <Link to='/signup' className="signup-button">
            Sign Up
          </Link>
        </div>:
        <div className="auth-buttons"><Link>{sessionDetails.fullName}</Link> <Link className="logout-butt" onClick={handleLogout}>Logout</Link> </div>
        }
      </div>
    </header>
  )
}

export default Header

