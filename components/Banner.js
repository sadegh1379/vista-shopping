import React from 'react'
import SingleCard from './SingleCard';

const Banner = () => {
  return (
    <div className='grid grid-cols-12 gap-2 my-2'>
      <div className='col-span-4 hidden lg:block'>
          <SingleCard />
      </div>
      <div className='lg:col-span-8 col-span-12  bg-green-300'>
               ali
      </div>
    </div>
  )
}

export default Banner
