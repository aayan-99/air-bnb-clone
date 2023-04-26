import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const Homes = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='pt-[100px]'>
        <div className='w-[60%] mx-auto flex flex-col xl:flex-row mb-10'>

          {/* left side */}
          <div className='flex-grow  flex justify-center items-center'>
            <div className='w-fit flex flex-col'>
              <h1 className='text-5xl text-red-400 font-[600]'>Airbnb it.</h1>
              <h1 className='text-5xl text-gray-800 font-[600] pt-2'>You could earn</h1>
              <h1 className='text-7xl text-gray-800 font-[600] pt-5'>₹2,292</h1>
              <h1 className='text-sm py-2'>1 night at an estimated ₹2,292 a night</h1>
              <h1 className='underline text-sm'>Learn how we estimate your earnings</h1>
            </div>
          </div>

          {/* right side */}
          <div className='flex-grow '>
            <div className='relative w-full max-w-[600px] h-[600px]'>
              <Image src='/map.jpg' layout='fill' objectFit='cover' />
            </div>
          </div>
        </div>

        <div className='py-10 pt-[120px] flex justify-center items-center'>
          <h1 className='text-5xl font-[500] poppins'>Airbnb it easily with Airbnb Setup</h1>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Homes