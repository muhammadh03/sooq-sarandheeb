import React from 'react'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <nav className='bg-[#3FC602] text-white flex items-center justify-between px-8 py-6 shadow-xl shadow-gray-300'>
      <div className='flex items-center gap-2 py-2 px-6 hover:bg-red-600 rounded-lg'>
        <GridViewRoundedIcon />
        <p>Category</p>
      </div>
      
      <div>
        <ul className='flex items-center gap-6 sm:hidden'>
            <li>
                <a href="#" className='nav-link'>Baby Products</a>
            </li>
            <li>
                <a href="#" className='nav-link'>Fresh Food</a>
            </li>
            <li>
                <a href="#" className='nav-link'>Dairy</a>
            </li>
            <li>
                <a href="#" className='nav-link'>Beverages</a>
            </li>
        </ul>
      </div>

      <div className='flex items-center '>
        <input type="text" placeholder="Search..." className='w-72 border-2 px-4 py-2 rounded-full relative' />
        <div className='bg-red-600 p-1.5 rounded-full absolute right-9'>
            <MagnifyingGlassIcon strokeWidth={2} className=' size-6 cursor-pointer' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
