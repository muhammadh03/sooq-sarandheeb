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
        <div className='flex flex-col justify-between sm:w-32 md:w-[13.5rem] lg:w-[14rem] h-[29rem] md:h-[29rem] lg:h-[32rem] p-4 border-2 bg-white border-gray-300 hover:border-indigo-700 rounded-2xl shadow-xl cursor-pointer'>
            <div>
                <div>
                    <FavoriteBorderRoundedIcon />
                </div>

                <div className='flex items-center justify-center md:h-40 lg:h-48'>
                    <img src={itemImage} alt="" className='sm:w-28 md:w-32 lg:w-40 h-32 md:h-36 lg:h-40' />
                </div>
                <div className='mt-1'>
                    <hr className='border-1 border-gray-300' />
                </div>

                <div className='mt-1 md:mt-3'>
                    <div>
                        <p className='text-xs'>
                            {brand}
                        </p>
                    </div>

                    <div >
                        <p className='font-semibold text-sm truncate'>
                            {title}
                        </p>
                    </div>

                    <div >
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
                </div>
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
