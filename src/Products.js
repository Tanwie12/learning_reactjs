import React from 'react'
import{Link, Outlet} from 'react-router-dom'

function Products() {
  return (
    <>
    <div>Products
        <input type='search' placeholder='search here'/>
    </div>
    <nav>
        <Link to='featured'>featured</Link>
        <Link to='newfeature'>next</Link>
    </nav>
    <Outlet></Outlet>
    </>
  )
}

export default Products