import React from 'react'
import Banner from '../Components/Banner';
import Card from '../Components/Card';

import CardOne from '../assets/cardOne.jpg';
import CardTwo from '../assets/cardTwo.jpg';
import CardThree from '../assets/cardThree.jpg';
import CardFour from '../assets/cardFour.jpg';
import CardFive from '../assets/cardFive.jpg';


const CardDetails = [
    {
        title : 'Premium Perfumes',
        image : <img src={CardOne} alt="" className='rounded-t-xl' />
    },
    {
        title : 'Frozen Products',
        image : <img src={CardTwo} alt="" className='rounded-t-xl' />
    },
    {
        title : 'Chilled Products',
        image : <img src={CardThree} alt="" className='rounded-t-xl' />
    },
    {
        title : 'Fresh Sea Food',
        image : <img src={CardFour} alt="" className='rounded-t-xl' />
    },
    {
        title : 'Beverages',
        image : <img src={CardFive} alt="" className='rounded-t-xl' />
    },
    {
        title : 'Premium Perfumes',
        image : <img src={CardOne} alt="" className='rounded-t-xl' />
    },
    {
        title : 'Frozen Products',
        image : <img src={CardTwo} alt="" className='rounded-t-xl' />
    },
    {
        title : 'Chilled Products',
        image : <img src={CardThree} alt="" className='rounded-t-xl' />
    },
    {
        title : 'Fresh Sea Food',
        image : <img src={CardFour} alt="" className='rounded-t-xl' />
    },
    {
        title : 'Beverages',
        image : <img src={CardFive} alt="" className='rounded-t-xl' />
    }
]

const HomeContent = () => {
  return (
    <div>
      <Banner />
      <div className='container mt-4 grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 lg:gap-12'>
      {CardDetails.map(({title, image}) => (
        <Card 
        key={title}
        title={title}
        image={image}
        />
      ))}
      </div>
    </div>
  )
}

export default HomeContent;
