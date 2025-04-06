import React from 'react'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const Navbar = () => {
    return (
        <nav className='bg-[#3FC602] text-white shadow-xl shadow-gray-300'>
            <div className='container flex items-center justify-between'>
                <div className='hidden md:flex items-center gap-2 py-2 px-3 hover:bg-red-600 rounded-lg'>
                    <GridViewRoundedIcon />
                    <p>Category</p>
                </div>

                {/* MOBILE HAMBURGER */}
                <div>
                    <button>
                        <MenuRoundedIcon fontSize='large' />
                    </button>
                </div>

                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-6'>
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

                <div className='flex items-center'>
                    <input type="text" placeholder="Search..." className='w-40 sm:w-72 lg:w-80 border-2 py-1 px-2 md:py-2 md:px-4 rounded-full relative' />
                    <MagnifyingGlassIcon strokeWidth={2} className='bg-red-600 p-1.5 rounded-full absolute size-7 md:size-9 right-5 md:right-9 lg:right-9.5 cursor-pointer' />
                    {/* <div className=''>
                        <MagnifyingGlassIcon strokeWidth={2} className='bg-red-600 p-1.5 rounded-full absolute  size-9 right-5 md:right-9 lg:right-9.5 cursor-pointer' />
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
