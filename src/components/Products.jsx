import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            <input type="search" placeholder="Search Products" />
            <nav>
                <Link to='featured'>Featured</Link>
                <Link to='/products/featured'>Featured2</Link>

                <Link to='new'>New</Link>
                <Link to='/products/new'>New2</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Products