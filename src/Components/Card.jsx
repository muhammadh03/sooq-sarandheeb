import { useEffect, useState } from 'react';
// import CardFour from '../assets/cardFour.jpg';

const Card = ({title, itemImage, offerImage}) => {

  const [showOffer, setShowOffer] = useState(false); // State to toggle between item image and offer image

  useEffect(() => {
    if (offerImage) {
      const interval = setInterval(() => {
        setShowOffer((prevShowOffer) => !prevShowOffer); // Toggle the state every 2 seconds
      }, 2000);

      return () => clearInterval(interval); // Cleanup the interval on component unmount
    }
  }, [offerImage]);

  return (
    <div className='my-2'>
      <div className='xs:w-[6.5rem] md:w-[7.6rem] lg:w-48 rounded-b-xl shadow-md shadow-gray-400 hover:shadow-xl cursor-pointer duration-300'>
        {/* <img src={itemImage} alt="" className='rounded-t-xl' /> */}
        {/* Conditional rendering of images */}
        <div className="relative w-full h-full overflow-hidden rounded-t-xl">
          {offerImage && showOffer ? (
            <img src={offerImage} alt="Offer" className="w-full h-full object-cover" />
          ) : (
            <img src={itemImage} alt={title} className="w-full h-full object-cover" />
          )}
        </div>
        <div className='text-center h-18 lg:h-14 p-2 rounded-b-xl '>
            <p>
                {title}
            </p>
        </div>
      </div>
    </div>
  )
}

export default Card;
