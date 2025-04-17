import React from 'react';

import gridOne from '../../assets/gridOne.webp';
import gridTwo from '../../assets/gridTwo.webp';
import gridThree from '../../assets/gridThree.webp';

const GridCard = () => {
    return (
        <div>
            <div className="grid grid-col-1 md:grid-cols-4 md:grid-rows-4 gap-4 py-8">
                <div className="bg-red-500 row-span-2 rounded-2xl">
                    <img src={gridTwo} className="w-full h-full rounded-2xl" alt="" />
                </div>
                <div className="bg-red-700 row-span-2 rounded-2xl">
                    <img src={gridThree} className="w-full h-full rounded-2xl" alt="" />
                </div>
                <div className=" bg-red-950 col-span-2 row-span-2 rounded-2xl">
                    <img src={gridOne} className="w-full h-full rounded-2xl" alt="" />
                </div>
                <div className="bg-slate-500 col-span-2 row-span-2 rounded-2xl">
                    <img src={gridOne} className="w-full h-full rounded-2xl" alt="" />
                </div>
                <div className="bg-slate-700 row-span-2 rounded-2xl">
                    <img src={gridTwo} className="w-full h-full rounded-2xl" alt="" />
                </div>
                <div className="bg-slate-900 row-span-2 rounded-2xl">
                    <img src={gridThree} className="w-full h-full rounded-2xl" alt="" />
                </div>
                {/* <div className="p-20 bg-blue-500 row-span-2">This is 07</div>
                <div className="p-20 bg-blue-800 row-span-2">This is 08</div> */}
                {/* <div className="p-20 bg-blue-950">This is 09</div> */}
                {/* <div className="p-20 bg-green-500">This is 10</div> */}
                {/* <div className="p-20 bg-green-800">This is 11</div>
                    <div className="p-20 bg-green-950">This is 12</div> */}
                {/* <div className="p-10 bg-yellow-500 ">This is 13</div>
                <div className="p-10 bg-yellow-700 ">This is 14</div>
                <div className="p-10 bg-yellow-900 ">This is 15</div>
                <div className="p-10 bg-pink-500 ">This is 16</div>
                <div className="p-10 bg-pink-700 ">This is 17</div>
                <div className="p-10 bg-pink-900 ">This is 18</div>
                <div className="p-10 bg-gray-500 ">This is 19</div>
                <div className="p-10 bg-gray-700 ">This is 20</div> */}
            </div>
        </div>
    )
}

export default GridCard;
