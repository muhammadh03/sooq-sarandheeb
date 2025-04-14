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

import ElectronicsAndAppliancesCard from './Cards/ElectronicsAndAppliancesCard';

import imageOne from '../assets/HomeAndLifeStyle/imageOne.webp';
import imageTwo from '../assets/HomeAndLifeStyle/imageTwo.webp';
import imageThree from '../assets/HomeAndLifeStyle/imageThree.webp';
import imageFour from '../assets/HomeAndLifeStyle/imageFour.webp';
import imageFive from '../assets/HomeAndLifeStyle/imageFive.webp';
import imageSix from '../assets/HomeAndLifeStyle/imageSix.webp';
import imageSeven from '../assets/HomeAndLifeStyle/imageSeven.webp';
import imageEight from '../assets/HomeAndLifeStyle/imageEight.webp';
import imageNine from '../assets/HomeAndLifeStyle/imageNine.webp';
import imageTen from '../assets/HomeAndLifeStyle/imageTen.webp';
import imageEleven from '../assets/HomeAndLifeStyle/imageEleven.webp';
import imageTwelve from '../assets/HomeAndLifeStyle/imageTwelve.webp';


const CardDetails = [
    {
        title: 'WallNut',
        itemImage: imageOne,
        price: '0.750'
    },
    {
        title: 'Hazelnut',
        itemImage: imageTwo,
        price: '0.850'
    },
    {
        title: 'Peanut',
        itemImage: imageThree,
        price: '0.550'
    },
    {
        title: 'Almond',
        itemImage: imageFour,
        price: '0.650'
    },
    {
        title: 'CashewNut',
        itemImage: imageFive,
        price: '0.750'
    },
    {
        title: 'Pistachio',
        itemImage: imageSix,
        price: '1.250'
    },
    {
        title: 'WallNutTwo',
        itemImage: imageSeven,
        price: '0.750'
    },
    {
        title: 'HazelnutTwo',
        itemImage: imageEight,
        price: '0.850'
    },
    {
        title: 'PeanutTwo',
        itemImage: imageNine,
        price: '0.550'
    },
    {
        title: 'AlmondTwo',
        itemImage: imageTen,
        price: '0.650'
    },
    {
        title: 'CashewNutTwo',
        itemImage: imageEleven,
        price: '0.750'
    },
    {
        title: 'PistachioTwo',
        itemImage: imageTwelve,
        price: '1.250'
    },
];

const KillerDeals = () => {
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
                        <div className='block md:hidden w-full h-48 border-4 border-indigo-700 bg-black opacity-80  absolute top-10 z-50 py-6 px-4 rounded-2xl text-gray-300'>
                        <ul className='flex flex-col  justify-evenly gap-4'>
                            <li>
                                <a href="" className='mobile-nav-link'>All</a>
                            </li>
                            <li>
                                <a href="" className='mobile-nav-link'>Nuts & Seeds</a>
                            </li>
                            <li>
                                <a href="" className='mobile-nav-link'>Groceries</a>
                            </li>
                            <li>
                                <a href="" className='mobile-nav-link'>Health & Beauty</a>
                            </li>
                        </ul>
                    </div>
                    )}
                    <div className='hidden md:block lg:block'>
                        <ul className='flex items-center gap-4'>
                            <li>
                                <a href="" className='killerdeal-nav-link'>All</a>
                            </li>
                            <li>
                                <a href="" className='killerdeal-nav-link'>Nuts & Seeds</a>
                            </li>
                            <li>
                                <a href="" className='killerdeal-nav-link'>Groceries</a>
                            </li>
                            <li>
                                <a href="" className='killerdeal-nav-link'>Health & Beauty</a>
                            </li>
                        </ul>
                    </div>
    
                    <div className='flex items-center gap-4 mr-4'>
                        <p className='text-indigo-700'>
                            view all
                        </p>
                        <div className='flex items-center gap-3'>
                            <ArrowCircleLeftOutlinedIcon className='custom-prev-btn hover:text-indigo-700 cursor-pointer' />
                            <ArrowCircleRightOutlinedIcon className='custom-next-btn hover:text-indigo-700 cursor-pointer' />
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
                                <ElectronicsAndAppliancesCard
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

export default KillerDeals;
