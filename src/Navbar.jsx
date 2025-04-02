import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <div className="title"><Link to='/'>Crime Alert System </Link></div>
      <div className="navbar-content">
        <div>Home</div>
        <div>Alerts</div>
        <div>Report crimes</div>
      </div>
      <div className='login'>
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </div>
    </div>
  )
}

export default Navbar
