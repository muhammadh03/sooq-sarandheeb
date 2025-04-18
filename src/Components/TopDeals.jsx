import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Cursor Icon
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

// Mobile Hamburger
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import GroceryAndFreshCard from './Cards/GroceryAndFreshCard';

import WallNut from '../assets/wallnut.png';
import Hazelnut from '../assets/hazelnut.png';
import Peanut from '../assets/peanut.png';
import Almond from '../assets/almond.png';
import CashewNut from '../assets/cashewnut.png';
import Pistachio from '../assets/pistachio.png';


const CardDetails = [
    {
        title: 'WallNut',
        itemImage: WallNut,
        price: '0.750'
    },
    {
        title: 'Hazelnut',
        itemImage: Hazelnut,
        price: '0.850'
    },
    {
        title: 'Peanut',
        itemImage: Peanut,
        price: '0.550'
    },
    {
        title: 'Almond',
        itemImage: Almond,
        price: '0.650'
    },
    {
        title: 'CashewNut',
        itemImage: CashewNut,
        price: '0.750'
    },
    {
        title: 'Pistachio',
        itemImage: Pistachio,
        price: '1.250'
    },
    {
        title: 'WallNutTwo',
        itemImage: WallNut,
        price: '0.750'
    },
    {
        title: 'HazelnutTwo',
        itemImage: Hazelnut,
        price: '0.850'
    },
    {
        title: 'PeanutTwo',
        itemImage: Peanut,
        price: '0.550'
    },
    {
        title: 'AlmondTwo',
        itemImage: Almond,
        price: '0.650'
    },
    {
        title: 'CashewNutTwo',
        itemImage: CashewNut,
        price: '0.750'
    },
    {
        title: 'PistachioTwo',
        itemImage: Pistachio,
        price: '1.250'
    },
];

const TopDeals = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>

            <div className='flex items-center justify-between relative'>
                {/* MOBILE HAMBURGER */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='cursor-pointer'>
                    {isOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className='block md:hidden w-full h-48 border-4 border-[#3FC602] bg-black opacity-80  absolute top-10 z-50 py-6 px-4 rounded-2xl text-gray-300'>
                    <ul className='flex flex-col  justify-evenly gap-4'>
                        <li>
                            <a href="" className='topdeal-nav-link'>All</a>
                        </li>
                        <li>
                            <a href="" className='topdeal-nav-link'>Nuts & Seeds</a>
                        </li>
                        <li>
                            <a href="" className='topdeal-nav-link'>Groceries</a>
                        </li>
                        <li>
                            <a href="" className='topdeal-nav-link'>Health & Beauty</a>
                        </li>
                    </ul>
                </div>
                )}
                <div className='hidden md:block lg:block'>
                    <ul className='flex items-center gap-4 text-gray-700'>
                        <li>
                            <a href="" className='topdeal-nav-link'>All</a>
                        </li>
                        <li>
                            <a href="" className='topdeal-nav-link'>Nuts & Seeds</a>
                        </li>
                        <li>
                            <a href="" className='topdeal-nav-link'>Groceries</a>
                        </li>
                        <li>
                            <a href="" className='topdeal-nav-link'>Health & Beauty</a>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center gap-4 mr-4'>
                    <p className='text-[#3FC602]'>
                        view all
                    </p>
                    <div className='flex items-center gap-3'>
                        <ArrowCircleLeftOutlinedIcon className='custom-prev-btn text-gray-700 hover:text-[#3FC602] cursor-pointer' />
                        <ArrowCircleRightOutlinedIcon className='custom-next-btn text-gray-700 hover:text-[#3FC602] cursor-pointer' />
                    </div>
                </div>
            </div>


            <div className='mt-8'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    navigation={{
                        prevEl: ".custom-prev-btn",
                        nextEl: ".custom-next-btn",
                    }}
                    breakpoints={{
                        // When the screen width is >= 640px (small screens)
                        375: {
                            slidesPerView: 2, // Show 2 cards
                        },
                        // When the screen width is >= 768px (medium screens)
                        768: {
                            slidesPerView: 4, // Show 4 cards
                        },
                        // When the screen width is >= 1024px (large screens)
                        1024: {
                            slidesPerView: 5, // Show 5 cards
                        },
                    }}
                    className="mySwiper"
                >
                    {CardDetails.map(({ title, itemImage, price }) => (
                        <SwiperSlide>
                            <GroceryAndFreshCard
                                key={title}
                                title={title}
                                itemImage={itemImage}
                                price={price}
                                className='gap-6'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default TopDeals;
