import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image alt='banner' src='https://links.papareact.com/0fm' layout='fill' objectFit='cover' />
      <div className='flex gap-2 flex-col justify-center items-center absolute top-0 bottom-0 left-0 right-0'>
        <p className='text-[13px]'>Not sure whre to go? Perfect.</p>
        <button className='px-8 py-3 bg-white shadow-md text-purple-600 font-[500] rounded-full text-[14px] hover:shadow-xl active:scale-110 transition-all duration-300'>I'm flexible</button>
      </div>
    </div>
  )
}

export default Banner