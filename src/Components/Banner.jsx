import React, { useEffect, useState } from 'react'

import banOne from '../assets/banOne.webp';
import banTwo from '../assets/banTwo.webp';
import banThree from '../assets/banThree.webp';
import banFour from '../assets/banFour.webp';
import banFive from '../assets/banFive.webp';

import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Banner = () => {

    // Define the images for the carousel
    const slides = [banOne, banTwo, banThree, banFour, banFive];

    const [currentSlide, setCurrentSlide] = useState(0);


    const prevSlide = () => {
        const isFirstSlide = currentSlide === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentSlide === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newIndex);
    }


    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000) // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [slides.length]);


    // Handle manual navigation
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className='container mt-4'>
            <div className='w-full h-40 md:h-64 lg:h-96 overflow-hidden relative rounded-2xl group'>
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            className='w-full h-40 md:h-64 lg:h-96'
                        />
                    ))}
                </div>

                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-white cursor-pointer'>
                    <ArrowCircleLeftOutlinedIcon onClick={prevSlide} />
                </div>

                {/* Right Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-white cursor-pointer'>
                    <ArrowCircleRightOutlinedIcon onClick={nextSlide} />
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-[#3FC602] w-9" : "bg-gray-300"
                                }`}
                        ></button>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Banner;
