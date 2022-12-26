import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
    }
  }

  return (
    <nav>
      {/* 
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link> 
        */}

      <NavLink style={navLinkStyles} to='/'>Home</NavLink>
      <NavLink style={navLinkStyles} to='/about'>About</NavLink>
      <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
    </nav>
  )
}

export default Navbar