import React from 'react';
import cartIcon from '../assets/icons/cart.svg';
import {Link} from 'react-router-dom';
function Header() {
  return (
    <nav id="header" className='bg-black text-white'>
        <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
          <div className='logo-wrapper pl-4 flex items-center'>
            <Link to="/" className='toggleColor text-white no-underline hover:no-underline font-bold text-xl lg:text-2xl'>
              Foodie
            </Link>
          </div>

          <div className='nav-menu-wrapper flex items-center justify-between space-x-10'>
              <Link to="/" className='text-xl'>Home</Link>
              <Link to="#about" className='text-xl'>About</Link>
          </div>
          <div className='flex items-center justify-center space-x-4'>
            <Link to="/cart">
              <img src={cartIcon} alt="cart"/>
              </Link>
            <Link to="/login">Login</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
    </nav>
  )
}

export default Header