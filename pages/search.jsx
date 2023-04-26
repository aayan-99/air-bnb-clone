import Footer from '@/components/Footer'
import InfoCard from '@/components/InfoCard'
import Navbar from '@/components/Navbar'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React from 'react'

const Search = ({ searchResults }) => {

  const router = useRouter();

  console.log(searchResults)

  const { location, startDate, endDate, noOfUsers } = router.query;

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  // console.log(router.query);


  return (
    <div className=''>
      <div className='pb-[90px]'>
        <Navbar placeholder={`${location} | ${range} | ${noOfUsers} guests`} />
      </div>

      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>300+ Stays - {range} - for {noOfUsers} guests</p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='filter-button'>Cancelation Flexibility</p>
            <p className='filter-button'>Type of Place</p>
            <p className='filter-button'>Price</p>
            <p className='filter-button'>Rooms & Beds</p>
            <p className='filter-button'>More Filters</p>
          </div>

          <div className='flex flex-col mb-10'>
            {
              searchResults?.map((data, i) => (
                <InfoCard key={i} img={data?.img} location={data?.location} title={data?.title} description={data?.description} star={data?.star} price={data?.price} total={data?.total} />
              ))
            }
          </div>


        </section>
      </main>


      <Footer />
    </div>
  )
}

export default Search


export async function getServerSideProps() {
  const searchResults = await fetch('https://www.jsonkeeper.com/b/5NPS').then((response) => response?.json());
  return {
    props: {
      searchResults: searchResults,
    }
  }
}