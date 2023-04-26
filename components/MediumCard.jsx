import Image from 'next/image'
import React from 'react'

const MediumCard = ({ img, title }) => {
  return (
    <div className='cursor-pointer hover:scale-105 transition-all duration-300 ease-out'>
      <div className='relative h-[200px] md:h-[300px] w-[200px] md:w-[300px]'>
        <Image src={img} layout='fill' objectFit='cover' className=' rounded-[15px]' />
      </div>
      <h2 className='text-lg md:text-xl mt-2'>{title}</h2>
    </div>
  )
}

export default MediumCard