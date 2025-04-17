import React, { useState } from 'react'
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import ZoomOutMapRoundedIcon from '@mui/icons-material/ZoomOutMapRounded';

import GroceryAndFreshNav, { GroceryAndFreshSmallNav } from './NavCards/GroceryAndFreshNav';
import ElectronicsAndAppliancesNav from './NavCards/ElectronicsAndAppliancesNav';
import HomeAndLifestyleNav from './NavCards/HomeAndLifestyleNav';

const Navbar = () => {

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const handleCategoryClick = () => {
        setIsCategoryOpen(!isCategoryOpen);
    }


    return (
        <nav className='bg-white text-gray-500 border-y-2 border-[#3FC602] shadow-xl shadow-gray-300'>
            <div className='container flex items-center justify-between relative'>

                {/* MOBILE HAMBURGER */}
                {/* <div className='lg:hidden'>
                    <button>
                        <MenuRoundedIcon fontSize='large' className='cursor-pointer' />
                    </button>
                </div> */}

                {/* MOBILE HAMBURGER */}
                <div>
                    {
                        isCategoryOpen ? (
                            <button 
                            onClick={handleCategoryClick} 
                            className='flex items-center gap-2 py-2 px-3  rounded-lg focus:bg-red-600 focus:text-white'>
                                {/* <ExpandMoreRoundedIcon /> */}
                                <ZoomOutMapRoundedIcon />
                                <p>Category</p>
                            </button>
                        ) : (
                            <button 
                            onClick={handleCategoryClick} 
                            className='flex items-center gap-2 py-2 px-3 hover:bg-red-600 hover:text-white rounded-lg'>
                                <GridViewRoundedIcon />
                                <p>Category</p>
                            </button>
                        )
                    }
                </div>

                {/* MOBILE MENU */}
                {isCategoryOpen && (
                    <div className='block lg:hidden bg-white text-gray-700 absolute top-14.5 z-50 p-2 md:p-2 rounded-lg w-36 md:w-52'>
                        <div className='flex flex-col gap-4 relative'>
                            <div className='group rounded-lg'>
                                <div className='hover:bg-[#3FC602] hover:text-white p-2 rounded-lg'>
                                    <div className='text-xs md:text-base flex items-center justify-between'>
                                        <span>Grocery & Fresh</span>
                                        <KeyboardArrowRightRoundedIcon />
                                    </div>
                                </div>
                                <div className=' group-hover:block absolute left-32 -top-2 z-50 h-72 rounded-lg overflow-y-scroll'>
                                    <GroceryAndFreshSmallNav />
                                </div>
                            </div>
                            <div>
                                <div className='hover:bg-red-600 hover:text-white p-2 rounded-lg'>
                                    <div className='text-xs md:text-base flex items-center justify-between'>
                                        <span>Elec & Appliances</span>
                                        <KeyboardArrowRightRoundedIcon />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='hover:bg-indigo-700 hover:text-white p-2 rounded-lg'>
                                    <div className='text-xs md:text-base flex items-center justify-between'>
                                        <span>Home & Lifestyle</span>
                                        <KeyboardArrowRightRoundedIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='absolute -top-4 left-[16rem]'>
                            <GroceryAndFreshNav />
                        </div> */}
                    </div>
                )}

                <div className='hidden lg:flex items-center'>
                    <div className='group'>
                        <ul className='navbar-link hover:text-[#3FC602] flex items-center gap-2 '>
                            <li >
                                <a href="#">
                                    <span>Grocery & Fresh</span>
                                    <span><ExpandMoreRoundedIcon /></span>
                                </a>
                            </li>
                        </ul>
                        <div className='hidden group-hover:block absolute top-15 left-12 z-50 max-h-[26rem] rounded-b-lg overflow-y-auto'>
                            <GroceryAndFreshNav />
                        </div>
                    </div>

                    <div className='group'>
                        <ul className='navbar-link hover:text-indigo-700 flex items-center gap-2'>
                            <li>
                                <a href="#">
                                    <span>Electronics & Appliances</span>
                                    <span><ExpandMoreRoundedIcon /></span>
                                </a>
                            </li>
                        </ul>
                        <div className='hidden group-hover:block absolute top-15 left-12 z-50 max-h-[26rem] rounded-b-lg overflow-y-auto'>
                            <ElectronicsAndAppliancesNav />
                        </div>
                    </div>

                    <div className='group'>
                        <ul className='navbar-link hover:text-red-600 flex items-center gap-2'>
                            <li>
                                <a href="#">
                                    Home & Lifestyle
                                    <ExpandMoreRoundedIcon />
                                </a>
                            </li>
                            <div className='hidden group-hover:block absolute top-15 left-12 z-50 max-h-[26rem] rounded-b-lg overflow-y-auto'>
                                <HomeAndLifestyleNav />
                            </div>
                        </ul>
                    </div>
                </div>

                <div className='flex items-center'>
                    <input type="text" placeholder="Search..." className='w-40 sm:w-72 lg:w-80 border-2 py-1 px-2 md:py-2 md:px-4 rounded-full relative' />
                    <MagnifyingGlassIcon strokeWidth={2} className='bg-red-600 p-1.5 rounded-full absolute size-7 md:size-9 right-5 md:right-9 lg:right-9.5 cursor-pointer' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
