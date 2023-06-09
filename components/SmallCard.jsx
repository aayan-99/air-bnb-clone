import Image from 'next/image'
import React from 'react'

const SmallCard = ({ img, distance, location }) => {
  return (
    <div className='w-full flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-110 transition-all duration-200 ease-out'>
      {/* left */}
      <div className='relative h-16 w-16'>
        <Image alt='info-img' src={img} layout='fill' className='rounded-lg' />
      </div>
      {/* right */}
      <div>
        <h2>{location}</h2>
        <h3 className='text-gray-500'>{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard