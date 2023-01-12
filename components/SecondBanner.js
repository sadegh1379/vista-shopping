import Image from 'next/image'
import React from 'react'

const SecondBanner = () => {
  return (
    <div className='grid grid-cols-12 gap-3 sm:h-[200px] h-[100px]'>
      <div className='col-span-6'>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            alt="Mountains"
            src="/images/banner-2.png"
            layout="fill"
            className="rounded-xl cursor-pointer"
          />
        </div>
      </div>
      <div className='col-span-6'>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            alt="Mountains"
            src="/images/banner-3.png"
            layout="fill"
            className="rounded-xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default SecondBanner
