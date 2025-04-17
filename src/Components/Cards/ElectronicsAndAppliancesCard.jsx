import React from 'react';

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';


const ElectronicsAndAppliancesCard = ({
    brand, 
    title, 
    itemImage,
    descriptions,
    // descriptionOne,
    // descriptionTwo,
    // descriptionThree,
    // descriptionFour,
    // descriptionFive,
    // descriptionSix,
    price
}) => {
  return (
    <div className='sm:w-28 md:w-[9.5rem] lg:w-[13.5rem] pb-4 border-2 bg-white border-gray-300 p-2 hover:border-indigo-700 rounded-2xl shadow-xl cursor-pointer'>
            <FavoriteBorderRoundedIcon />

            <div className='flex items-center justify-center h-44'>
                <img src={itemImage} alt="" className='sm:w-28 md:w-28 lg:w-36 xs:h-16 md:h-40' />
            </div>

            <div>
                <hr className='border-1 border-gray-300' />
            </div>

            <div className='py-1 h-6'>
                <p className='text-xs'>
                    {brand}
                </p>
            </div>

            <div className='mb-2 h-14'>
                <p className='font-semibold text-sm'>
                    {title}
                </p>
            </div>

            <div>
                {descriptions && (
                    <ul className='list-disc pl-4 text-[10px] leading-5'>
                        {Object.values(descriptions).map((desc, index) => (
                            <li key={index}>
                                <a href="">
                                    {desc}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className='flex items-center justify-between'>
                <p className='font-semibold text-sm'>
                    OMR {price}
                </p>
                <button className='border-1 border-indigo-700 text-indigo-700 hover:bg-indigo-700 hover:text-white py-1 px-2 rounded-lg cursor-pointer'>Add</button>
            </div>
        </div>
  )
}

export default ElectronicsAndAppliancesCard;
