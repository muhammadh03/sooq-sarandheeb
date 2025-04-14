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

import NutsItemCard from './Cards/NutsItemCard';

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

const HotDeals = () => {

    return (
        <div>
            <div className='flex items-center justify-between'>
                <div>
                    <ul className='flex items-center gap-4'>
                        <li>
                            <a href="" className='nav-link'>All</a>
                        </li>
                        <li>
                            <a href="" className='nav-link'>Nuts & Seeds</a>
                        </li>
                        <li>
                            <a href="" className='nav-link'>Groceries</a>
                        </li>
                        <li>
                            <a href="" className='nav-link'>Health & Beauty</a>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center gap-4 mr-4'>
                    <p className='text-[#3FC602]'>
                        view all
                    </p>
                    <div className='flex items-center gap-3'>
                        <ArrowCircleLeftOutlinedIcon  className='custom-prev-btn hover:text-red-600 cursor-pointer' />
                        <ArrowCircleRightOutlinedIcon  className='custom-next-btn hover:text-red-600 cursor-pointer' />
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
                    className="mySwiper"
                >
                    {CardDetails.map(({ title, itemImage, price }) => (
                        <SwiperSlide>
                            <NutsItemCard
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

export default HotDeals;
