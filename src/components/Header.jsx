import React from 'react'

function Header() {
  return (
    <nav id="header" className='bg-black text-white'>
        <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
          <div className='logo-wrapper pl-4 flex items-center'>
            <h2>Foodie</h2>
          </div>

          <div className='nav-menu-wrapper flex items-center justify-between space-x-10'>
              <div>Home</div>
              <div>About</div>
          </div>
          <div className='flex items-center justify-center space-x-4'>
            <div>Cart</div>
            <div>Login</div>
          </div>
        </div>
    </nav>
  )
}

export default Header