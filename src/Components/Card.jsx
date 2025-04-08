import CardFour from '../assets/cardFour.jpg'

const Card = () => {
  return (
    <div>
      <div className='w-28 lg:w-48 my-2 mx-2 rounded-b-2xl shadow-lg shadow-gray-400'>
        <img src={CardFour} alt="" className='rounded-t-2xl' />
        <div className='text-center p-4'>
            <p>
                fresh sea food
            </p>
        </div>
      </div>
    </div>
  )
}

export default Card;
