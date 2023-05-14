import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
function NavBar() {
    const link=({ isActive })=>{
        return{
            fontweight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : ''
        }
    }
  return (
   <nav>
    <NavLink to='/'  activeClassName="active-link">Home</NavLink>
    <NavLink to='/namelist'style={link}>namelist</NavLink>
    <NavLink to='/products'style={link}>products</NavLink>
   </nav>
  )
}

export default NavBar