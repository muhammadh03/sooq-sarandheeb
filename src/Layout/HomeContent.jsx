import React from 'react'
import Banner from '../Components/Banner';
import Card from '../Components/card';

const HomeContent = () => {
  return (
    <div>
      <Banner />
      <div className='container mt-8 grid grid-cols-5 gap-12'>
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
