import React from 'react';

// import WallNut from '../../assets/wallnut.png';



const NutsItemCard = ({title, itemImage, price}) => {
    return (
        <div className='w-[13.5rem] pb-4 border-2 border-gray-300 p-2 hover:border-[#3FC602] rounded-2xl shadow-xl cursor-pointer'>
            <div className='flex items-center justify-center'>
                <img src={itemImage} alt="" className='w-32 h-44' />
            </div>

            <div>
                <hr className='border-1 border-gray-300' />
            </div>

            <div className='my-2 h-12'>
                <p className='font-semibold text-sm'>
                    {title}
                </p>
            </div>

            <div className='mb-4 relative'>
                <select name="gram" id="gram" className='border-1 border-gray-300 w-full rounded-sm text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#3FC602] cursor-pointer'>
                    <option value="gram">250g</option>
                    <option value="kg">500g</option>
                    <option value="kg">1kg</option>
                    <option value="kg">1.5kg</option>
                </select>
            </div>

            <div className='flex items-center justify-between'>
                <p className='font-semibold text-sm'>
                    OMR {price}
                </p>
                <button className='border-1 border-[#3FC602] text-[#3FC602] hover:bg-[#3FC602] hover:text-white py-1 px-2 rounded-lg cursor-pointer'>Add</button>
            </div>
        </div>
    )
}

export default NutsItemCard;
