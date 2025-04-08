import CardFour from '../assets/cardFour.jpg'

const Card = () => {
  return (
    <div className='my-2'>
      <div className='xs:w-[6.5rem] md:w-[7.6rem] lg:w-48 rounded-b-xl shadow-lg shadow-gray-400'>
        <img src={CardFour} alt="" className='rounded-t-xl' />
        <div className='text-center p-2'>
            <p>
                fresh sea food
            </p>
        </div>
      </div>
    </div>
  )
}

export default Card;
