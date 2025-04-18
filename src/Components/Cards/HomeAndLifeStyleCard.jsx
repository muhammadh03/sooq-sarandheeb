import React from 'react';

import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

const HomeAndLifeStyleCard = ({title, itemImage, price}) => {
  return (
    <div className='sm:w-28 md:w-[9.5rem] lg:w-[13.5rem] pb-4 border-2 bg-white border-gray-300 p-2 hover:border-red-600 rounded-2xl shadow-xl cursor-pointer'>
            <FavoriteBorderRoundedIcon />

            <div className='flex items-center justify-center h-52'>
                {/* <img src={itemImage} alt="" className='sm:w-28 md:w-36 lg:w-36 sm:h-36 md:h-40' /> */}
                <img src={itemImage} alt="" className='sm:w-28 md:w-28 lg:w-36 xs:h-16 md:h-40' />
            </div>

            <div>
                <hr className='border-1 border-gray-300' />
            </div>

            <div className='my-2 h-12'>
                <p className='font-semibold text-sm'>
                    {title}
                </p>
            </div>

            {/* <div className='mb-4 relative'>
                <select name="gram" id="gram" className='border-1 border-gray-300 w-full rounded-sm placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-red-600 cursor-pointer'>
                    <option value="gram">250g</option>
                    <option value="kg">500g</option>
                    <option value="kg">1kg</option>
                    <option value="kg">1.5kg</option>
                </select>
            </div> */}

            <div className='flex items-center justify-between'>
                <p className='font-semibold text-sm'>
                    OMR {price}
                </p>
                <button className='border-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-1 px-2 rounded-lg cursor-pointer'>Add</button>
            </div>
        </div>
  )
}

export default HomeAndLifeStyleCard;
