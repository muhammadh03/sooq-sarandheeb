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

import imageOne from '../assets/ElectronicsAndAppliances/imageOne.webp';
import imageTwo from '../assets/ElectronicsAndAppliances/imageTwo.jpeg';
import imageThree from '../assets/ElectronicsAndAppliances/imageThree.jpeg';
import imageFour from '../assets/ElectronicsAndAppliances/imageFour.jpeg';
import imageFive from '../assets/ElectronicsAndAppliances/imageFive.jpeg';
import imageSix from '../assets/ElectronicsAndAppliances/imageSix.jpeg';
import imageSeven from '../assets/ElectronicsAndAppliances/imageSeven.jpeg';
import imageEight from '../assets/ElectronicsAndAppliances/imageEight.jpeg';
import imageNine from '../assets/ElectronicsAndAppliances/imageNine.jpeg';
import imageTen from '../assets/ElectronicsAndAppliances/imageTen.jpeg';
import imageEleven from '../assets/ElectronicsAndAppliances/imageEleven.jpeg';
import imageTwelve from '../assets/ElectronicsAndAppliances/imageTwelve.png';


const CardDetails = [
    {
        brand: 'Boat',
        title: 'Boat Rockerz 425 Bluetooth Wireless Headphone',
        itemImage: imageOne,
        price: '0.750',
        descriptions: {
            descriptionOne: 'Battery Life: 25 Hours',
            descriptionTwo: 'Bluetooth Version: 5.2',
            descriptionThree: 'Dual Pairing',
            descriptionFour: 'ASAP Charge'
        }
    },
    {
        brand: 'Philips',
        title: 'Philips Multi Grooming Set MG5930/65',
        itemImage: imageTwo,
        price: '0.850',
        descriptions: {
            descriptionOne: 'Trimmer',
            descriptionTwo: '9 Length Settings',
            descriptionThree: 'Mens Grooming',
            descriptionFour: 'Up to 120 Minutes Runtime'
        }
    },
    {
        brand: 'Samsung',
        title: 'Samsung 10 kg 5 Star Fully Automatic Top Load',
        itemImage: imageThree,
        price: '0.550',
        descriptions: {
            descriptionOne: 'Fully Automatic Top Load',
            descriptionTwo: '700 RPM',
            descriptionThree: '5 Star Rating',
            descriptionFour: '10 kg Capacity',
            descriptionFive: 'Eco Bubble Technology'
        }
    },
    {
        brand: 'Samsung',
        title: 'Samsung 7.5 Kg 5 Star Semi Automatic',
        itemImage: imageFour,
        price: '0.650',
        descriptions: {
            descriptionOne: 'Semi Automatic Washing Machine',
            descriptionTwo: '1300 RPM',
            descriptionThree: '5 Star Rating',
            descriptionFour: '7.5 kg Capacity',
            descriptionFive: 'Hexa Storm Pulsator Wash Technology'
        }
    },
    {
        brand: 'Impex',
        title: 'Impex IGS 1213M NEO Glass Top Manual Gas Stove',
        itemImage: imageFive,
        price: '0.750',
        descriptions: {
            descriptionOne: 'Type: Manual Gas Stove',
            descriptionTwo: 'Burner Type: Brass',
            descriptionThree: 'Number of Burners: 3',
            descriptionFour: 'Body Material: Glass',
            descriptionFive: 'Color: Black'
        }
    },
    {
        brand: 'Whirlpool',
        title: 'Whirlpool 7kg 5 Star Fully Automatic Top Load',
        itemImage: imageSix,
        price: '1.250',
        descriptions: {
            descriptionOne: 'Fully Automatic Top Load',
            descriptionTwo: '740 RPM',
            descriptionThree: '5 Star Rating',
            descriptionFour: '7 kg Capacity',
            descriptionFive: 'Spiro Wash Technology, 6th Sense Technology'
        }
    },
    {
        brand: 'LG',
        title: 'LG 10 kg 5 Star Fully Automatic Top Load',
        itemImage: imageSeven,
        price: '0.750',
        descriptions: {
            descriptionOne: 'Fully Automatic Top Load',
            descriptionTwo: '700 RPM',
            descriptionThree: '5 Star Rating',
            descriptionFour: '10 kg Capacity',
            descriptionFive: 'Jet Spray+'
        }
    },
    {
        brand: 'LG',
        title: 'LG 7.5 kg Fully Automatic Top Load',
        itemImage: imageEight,
        price: '0.850',
        descriptions: {
            descriptionOne: 'Fully Automatic Top Load',
            descriptionTwo: '700 RPM',
            descriptionThree: '7.5 kg Capacity',
            descriptionFour: '8 Wash Programs'
        }
    },
    {
        brand: 'Prestige',
        title: 'Prestige Nutri-Mix 2.0 350W Mixer Grinder',
        itemImage: imageNine,
        price: '0.550',
        descriptions: {
            descriptionOne: '350 W : Higher the Wattage, tougher the Juicing/Grinding',
            descriptionTwo: 'Stainless steel blades for multiple functions',
            descriptionThree: 'Dual Jar Design',
            descriptionFour: 'Suitable for: Wet Grinding, Chutney Grinding, Dry Grinding, Blending'
        }
    },
    {
        brand: 'Toshiba',
        title: 'Toshiba 7 kg 5 Star Fully Automatic Top Load',
        itemImage: imageTen,
        price: '0.650',
        descriptions: {
            descriptionOne: 'Fully Automatic Top Load',
            descriptionTwo: '0.750',
            descriptionThree: '5 Star Rating',
            descriptionFour: '7 kg Capacity',
            descriptionFive: 'Fundamentally Clean Technology, Pulsator Wash, Fuzzy Control'
        }
    },
    {
        brand: 'Bosch',
        title: 'Bosch 7.5 kg Fully Automatic Top Load',
        itemImage: imageEleven,
        price: '0.750',
        descriptions: {
            descriptionOne: 'Fully Automatic Top Load',
            descriptionTwo: '680 RPM : Higher the spin speed, lower the drying time',
            descriptionThree: 'PowerWave Wash System',
            descriptionFour: '7.5 kg Capacity',
            descriptionFive: 'Reload function, Stain Removal'
        }
    },
    {
        brand: 'Bosch',
        title: 'Bosch 6.5 kg Fully Automatic Top Load',
        itemImage: imageTwelve,
        price: '1.250',
        descriptions: {
            descriptionOne: 'Fully Automatic Top Load',
            descriptionTwo: '680 RPM : Higher the spin speed, lower the drying time',
            descriptionThree: 'Vario Inverter motor',
            descriptionFour: '6.5 kg Capacity',
            descriptionFive: 'One touch Start ,Soft Closing Lid'
        }
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
                        spaceBetween={10}
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
                                spaceBetween: 10,
                            },
                            // When the screen width is >= 768px (medium screens)
                            768: {
                                slidesPerView: 3, // Show 3 cards
                                spaceBetween: 20,
                            },
                            // When the screen width is >= 1024px (large screens)
                            1024: {
                                slidesPerView: 4, // Show 4 cards
                                spaceBetween: 20,
                            },
                            // When the screen width is >= 1280px
                            1280: {
                                slidesPerView: 5, // Show 5 cards
                                spaceBetween: 20,
                            },
                        }}
                        className="mySwiper"
                    >
                        {CardDetails.map(({ 
                            brand, 
                            title, 
                            itemImage,
                            descriptions,
                            price
                        }) => (
                            <SwiperSlide>
                                <ElectronicsAndAppliancesCard
                                    key={title}
                                    brand={brand}
                                    title={title}
                                    itemImage={itemImage}
                                    descriptions={descriptions}
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
