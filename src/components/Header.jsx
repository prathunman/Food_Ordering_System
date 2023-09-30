import React from 'react'

function Header() {
  return (
    <nav className='bg-black text-white'>
        <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
            <img src='/' alt='logo'/>
        </div>
        <div className='nav-menu-wrapper flex items-center justify-between space-x-10'>
            <div>Home</div>
            <div>About</div>
        </div>

    </nav>
  )
}

export default Header