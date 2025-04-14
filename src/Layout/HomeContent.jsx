import React from 'react'
import Banner from '../Components/Banner';
import Card from '../Components/Cards/Card';

import CardOne from '../assets/cardOne.jpg';
import CardTwo from '../assets/cardTwo.jpg';
import CardThree from '../assets/cardThree.jpg';
import CardFour from '../assets/cardFour.jpg';
import CardFive from '../assets/cardFive.jpg';
import CardSix from '../assets/cardSix.jpg';
import CardSeven from '../assets/cardSeven.jpg';
import CardEight from '../assets/cardEight.jpg';
import CardNine from '../assets/cardNine.jpg';
import CardTen from '../assets/cardTen.jpg';

import OfferImage from '../assets/offerImage.jpg';
import HotDeals from '../Components/HotDeals';
import NutsItemCard from '../Components/Cards/NutsItemCard';

const CardDetails = [
    {
      title: 'Premium Perfumes',
      itemImage: CardOne,
    },
    {
      title: 'Frozen Products',
      itemImage: CardTwo,
    },
    {
      title: 'Chilled Products',
      itemImage: CardThree,
    },
    {
      title: 'Fresh Sea Food',
      itemImage: CardFour,
    },
    {
      title: 'Beverages',
      itemImage: CardFive,
    },
    {
        title: 'Eid Special Sweets',
        itemImage: CardSix,
      },
      {
        title: 'Home Furniture',
        itemImage: CardSeven,
      },
      {
        title: 'Premium Olive Oil',
        itemImage: CardEight,
      },
      {
        title: 'Bakery Items',
        itemImage: CardNine,
      },
      {
        title: 'Handmade Sandals',
        itemImage: CardTen,
      },
  ];

const HomeContent = () => {

    const offerMapping = {
        'Premium Perfumes': OfferImage,
        'Home Furniture': OfferImage,
        'Handmade Sandals': OfferImage,
    };
      
    return (
        <div>
            <Banner />
            <div className='container mt-4 grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 lg:gap-12'>
                {CardDetails.map(({ title, itemImage }) => {
                    const offerImage = offerMapping[title] || null; // Get offer image from mapping, or null if not defined
                    return (
                        <Card
                        key={title}
                        title={title}
                        itemImage={itemImage}
                        offerImage={offerImage}
                    />
                    )
                })}
            </div>

            {/* HOTTEST DEALS COMPONENT */}
            <div className='mt-6'>
              <div className='text-center my-2'>
                  <h1 className='text-3xl font-semibold'>Hottest Deals</h1>
              </div>
              
              <div className='px-8'>
                  <HotDeals />
              </div>
            </div>
        </div>
    )
}

export default HomeContent;
