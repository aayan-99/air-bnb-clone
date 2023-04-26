import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Banner from '@/components/Banner'
import SmallCard from '@/components/SmallCard'
import MediumCard from '@/components/MediumCard'
import LargeCard from '@/components/LargeCard'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ exploreData, cardsData }) {
  return (
    <div className=''>

      <Head>
        <title>AirBnB Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* navbar */}
      <div>
        <Navbar />
      </div>

      {/* banner */}
      <div>
        <Banner />
      </div>

      <main className='w-full mx-auto max-w-7xl px-8 sm:px-16'>
        {/* explore nearby section */}
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 lg:grid-cols-4'>
            {
              exploreData?.map((data, i) => (
                <SmallCard location={data?.location} distance={data?.distance} img={data?.img} key={i} />
              ))
            }
          </div>
        </section>

        {/* live anywhere section */}
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Live Anywhere</h2>
          <div className='flex space-x-4 overflow-x-scroll p-3 md:p-4 scrollbar-hide'>
            {
              cardsData?.map((data, i) => (
                <MediumCard key={i} img={data?.img} title={data?.title} />
              ))
            }
          </div>
        </section>

        {/* large card section section */}
        <section className='pt-6'>
          {/* <h2 className='text-4xl font-semibold pb-5'>Live Anywhere</h2> */}
          <div className=''>
            <LargeCard img='https://links.papareact.com/4cj' title='The Greates Outdoors' description='Wishlists created by AirBnB' buttonText='Get Inspired' />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}


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
