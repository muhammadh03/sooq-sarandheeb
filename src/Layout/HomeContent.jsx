import React from 'react'
import Banner from '../Components/Banner';
import Card from '../Components/Card';

import CardOne from '../assets/cardOne.jpg';
import CardTwo from '../assets/cardTwo.jpg';
import CardThree from '../assets/cardThree.jpg';
import CardFour from '../assets/cardFour.jpg';
import CardFive from '../assets/cardFive.jpg';
import CardSeven from '../assets/cardSeven.jpg';

import OfferImage from '../assets/offerImage.jpg';

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
        title: 'Premium Perfumes',
        itemImage: CardOne,
      },
      {
        title: 'Home Furniture',
        itemImage: CardSeven,
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
  ];

const HomeContent = () => {

    const offerMapping = {
        'Premium Perfumes': OfferImage,
        'Home Furniture': OfferImage,
        'Beverages': OfferImage,
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
        </div>
    )
}

export default HomeContent;
