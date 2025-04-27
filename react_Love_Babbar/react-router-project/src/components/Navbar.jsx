import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            {/* <a href="/">Home</a> */}
            {/* <Link to="/">Home</Link> */}
            <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}>
                Home
            </NavLink>
        </li>
        <li>
            {/* <a href="/about">About</a> */}
            {/* <Link to="/about">About</Link> */}
            <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : ""}>
                About
            </NavLink>
        </li>
        <li>
            {/* <a href="/dashboard">Dashboard</a> */}
            {/* <Link to="/dashboard">Dashboard</Link> */}
            <NavLink to="/dashboard" className={({isActive}) => isActive ? "active-link" : ""}>
                Dashboard
            </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
