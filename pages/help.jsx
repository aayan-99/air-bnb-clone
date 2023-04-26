import Footer from '@/components/Footer'
import MediumCard from '@/components/MediumCard';
import Navbar from '@/components/Navbar'
import Image from 'next/image';
import React, { useState } from 'react'

const Help = ({ exploreData, cardsData, placeholder }) => {

  const [searchText, setSearchText] = useState('');


  return (
    <div className=''>
      <Navbar />
      <div className='w-full px-[30px] md:px-[200px] xl:px-[300px] pt-[80px]'>

        {/* header */}
        <div className='w-full flex justify-center items-center md:pt-20 md:pb-10'>
          <h1 className='text-2xl md:text-4xl xl:text-5xl poppins'>Hi, How can we help you?</h1>
        </div>

        {/* searchbar */}
        <div className='flex justify-center items-center mt-5 md:my-5'>
          <div className='flex justify-between items-center gap-2 border-0 md:border w-full max-w-[400px] rounded-full p-4 md:shadow-sm'>
            <input type="text" value={searchText} onChange={(e) => setSearchText(e?.target?.value)} placeholder='Tell us your problem' className='border md:border-0 rounded-full px-3 md:px-2 py-2 md:py-1 text-[14px] text-gray-600 placeholder:text-gray-400 placeholder:text-[15px] md:text-[15px] outline-none w-full max-w-[400px]' />

            {/* search icon */}
            <div className='hidden md:flex bg-red-400 p-[8px] rounded-full justify-center items-center cursor-pointer active:scale-110 transition-all duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
          </div>
        </div>

        {/* login redirection */}
        <div className='w-full flex lg:border rounded-[20px] p-6 poppins md:my-20'>
          <div className='hidden lg:flex flex-col flex-grow'>
            <h1 className='text-[25px] font-[500]'>We're here for you</h1>
            <h3 className='text-[16px]'>Log in to get help with your reservations, account, and more.</h3>
          </div>
          <div className='flex-grow flex justify-center items-center'>
            <div className='w-full max-w-[400px] flex justify-center items-center py-3 bg-red-400 rounded-[10px] active:scale-95 transition-all duration-200 ease-out cursor-pointer shadow-md'>
              <h1 className='text-white font-[500] text-[15px]'>Log In or Sign Up</h1>
            </div>
          </div>
        </div>

        {/* guides section */}
        <section className='md:my-20'>
          <h2 className='text-2xl md:text-3xl font-[400] pb-2'>Guides for getting started</h2>
          <div className='flex space-x-4 overflow-x-scroll p-3 md:p-4 scrollbar-hide'>
            {
              cardsData?.map((data, i) => (
                <MediumCard img={data?.img} title={data?.title} />
              ))
            }
          </div>
        </section>

      </div>
      <div className='w-full bg-black lg:h-[45vh] px-[30px] md:px-[200px] xl:px-[300px] pt-[30px] pb-5'>
        <h1 className='text-4xl font-[600] text-white poppins p-5 mb-4'>Explore More</h1>
        <div className='flex flex-col lg:flex-row gap-5 lg:gap-20'>

          <div className='w-full hover:scale-110 transition-all duration-200 ease-out cursor-pointer'>
            <div className='relative w-full h-[200px]'>
              <Image src='/help-img-1.png' className=' rounded-t-[15px]' layout='fill' objectFit='cover' />
            </div>
            <div className='bg-[#222222] px-5 py-3 rounded-b-[15px]'>
              <h2 className='text-white text-[16px] font-[600]'>Our comunity policies</h2>
            </div>
          </div>

          <div className='w-full hover:scale-110 transition-all duration-200 ease-out cursor-pointer'>
            <div className='relative w-full h-[200px]'>
              <Image src='/help-img-2.png' className=' rounded-t-[15px]' layout='fill' objectFit='cover' />
            </div>
            <div className='bg-[#222222] px-5 py-3 rounded-b-[15px]'>
              <h2 className='text-white text-[16px] font-[600]'>Safety tips and guidelines</h2>
            </div>
          </div>

          <div className='w-full hover:scale-110 transition-all duration-200 ease-out cursor-pointer'>
            <div className='relative w-full h-[200px]'>
              <Image src='/help-img-3.jpg' className=' rounded-t-[15px]' layout='fill' objectFit='cover' />
            </div>
            <div className='bg-[#222222] px-5 py-3 rounded-b-[15px]'>
              <h2 className='text-white text-[16px] font-[600]'>Our journey</h2>
            </div>
          </div>


        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Help

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then((response) => response?.json());
  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then((response) => response?.json());
  return {
    props: {
      exploreData: exploreData,
      cardsData: cardsData,
    }
  }
};