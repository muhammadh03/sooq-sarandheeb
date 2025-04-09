import CardFour from '../assets/cardFour.jpg'

const Card = ({title, image}) => {
  return (
    <div className='my-2'>
      <div className='xs:w-[6.5rem] md:w-[7.6rem] lg:w-48 rounded-b-xl shadow-lg shadow-gray-400'>
        {image}
        <div className='text-center h-18 lg:h-14 p-2'>
            <p>
                {title}
            </p>
        </div>
      </div>
    </div>
  )
}

export default Card;
