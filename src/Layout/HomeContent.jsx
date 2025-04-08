import React from 'react'
import Banner from '../Components/Banner';
import Card from '../Components/Card';

const HomeContent = () => {
  return (
    <div>
      <Banner />
      <div className='container mt-4 grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 lg:gap-12'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  )
}

export default HomeContent;
