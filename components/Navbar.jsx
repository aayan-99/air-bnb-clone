import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import smallLogo from '../assets/images/airbnb_small.png'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = ({ placeholder }) => {

  const router = useRouter();

  const [searchText, setSearchText] = useState('');

  const [navPopUpToggle, setNavPopUpToggle] = useState({
    menuProfileToggle: false,
    signUpToggle: false,
    loginToggle: false,
  });

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [noOfUsers, setNoOfUsers] = useState(1);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSearchPage = () => {
    setSearchText('')
    router.push({
      pathname: '/search',
      query: {
        location: searchText,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfUsers: noOfUsers,
      }
    })
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  };

  // useEffect(() => {
  //   console.log(router?.route)
  // }, [])


  return (
    <>
      <nav className='w-full z-[50] fixed top-0 grid grid-cols-[70px_1fr_auto] items-center md:grid-cols-3 bg-white shadow-md p-2 md:p-5 md:px-10'>

        {/* left */}
        <div onClick={() => router.push('/')} className='hidden relative md:flex items-center h-10 cursor-pointer'>
          <Image
          alt='info-img'
            src='https://links.papareact.com/qd3'
            layout='fill'
            objectFit='contain'
            objectPosition='left'
          />
        </div>

        <div onClick={() => router.push('/')} className='w-[80px] md:hidden relative flex justify-center items-center cursor-pointer'>
          <Image alt='info-img' src={smallLogo} objectFit='contain' objectPosition='left' height={40} />
        </div>


        {/* center - search*/}
        <div className='w-full'>
          {
            router?.route !== '/help' || '/homes' ?

              <div className='flex justify-between items-center gap-2 border-0 md:border w-full max-w-[600px] rounded-full px-2 py-[5px] md:shadow-sm'>
                <input type="text" value={searchText} onChange={(e) => setSearchText(e?.target?.value)} placeholder={placeholder || 'Start your search'} className='border md:border-0 rounded-full px-3 md:px-2 py-2 md:py-1 text-[13px] text-gray-600 placeholder:text-gray-400 placeholder:text-[15px] md:text-[15px] outline-none w-full max-w-[400px]' />

                {/* search icon */}
                <div className='hidden md:flex bg-red-400 p-[6px] rounded-full justify-center items-center cursor-pointer active:scale-110 transition-all duration-300'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
              </div>
              :
              ''
          }

        </div>


        {/* right */}
        {
          router?.route === '/homes' ?
            <div className='w-full px-10 flex gap-10'>
              <button className='px-7 text-[16px] hidden lg:block poppins font-[500] rounded-[10px] active:scale-95 shadow-md transition-all duration-200 ease-out text-white py-3 popins bg-red-400'>AirBnb Setup</button>
              <button className='px-5 lg:px-7 text-[14px] lg:text-[16px] poppins font-[500] rounded-[10px] active:scale-95 shadow-md transition-all duration-200 ease-out border-2 border-gray-600 py-3 popins'>Aks a Super host</button>
            </div>
            :
            <>
              <div className='md:w-full relative'>

                <div className='flex items-center justify-end space-x-2 md:space-x-4'>

                  <p className='text-gray-500 hidden md:block'>Become a host</p>

                  {/* globe icon */}
                  <div className='cursor-pointer hidden md:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>


                  {/* menu profile icons */}
                  <div className='border flex items-center gap-2 rounded-full p-2' onClick={() => setNavPopUpToggle({
                    ...navPopUpToggle,
                    menuProfileToggle: !navPopUpToggle?.menuProfileToggle,
                  })}>

                    {/* menu icon */}
                    <div className='cursor-pointer'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                    </div>

                    {/* profile icon */}
                    <div className='cursor-pointer'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>

                  </div>

                </div>


                {/* menu profile popup */}
                <div className={`w-full min-w-[200px] md:min-w-0 max-w-[240px] transition-all duration-200 ease-in-out ${navPopUpToggle?.menuProfileToggle ? 'max-h-[200px] py-2 z-[100]' : 'max-h-0 py-0 overflow-hidden'} bg-white  absolute top-[110%] right-0 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-[15px]`}>


                  <p className='py-[10px] text-gray-900 px-4 font-[500] text-[14px] poppins cursor-pointer hover:bg-gray-100 rounded-t-[10px] active:scale-95 transition-all duration-200 ease-out' onClick={() => setNavPopUpToggle({
                    ...navPopUpToggle,
                    signUpToggle: !navPopUpToggle?.signUpToggle,
                  })}>Sign Up</p>


                  <p className='py-[10px] text-gray-900 px-4 text-[14px] poppins cursor-pointer hover:bg-gray-100' onClick={() => setNavPopUpToggle({
                    ...navPopUpToggle,
                    signUpToggle: !navPopUpToggle?.signUpToggle,
                  })}>Login</p>


                  <div className='w-full bg-gray-300 my-2 pt-[1px]'></div>


                  <p className='py-[10px] text-gray-900 px-4 text-[14px] poppins cursor-pointer hover:bg-gray-100' onClick={() => router.push('/homes')}>AirBnB your home</p>


                  <p className='py-[10px] text-gray-900 px-4 text-[14px] poppins cursor-pointer hover:bg-gray-100 rounded-b-[10px]' onClick={() => router.push('/help')}>Help</p>


                </div>


                {/* overlay */}
                <div onClick={() => setNavPopUpToggle({
                  ...navPopUpToggle,
                  menuProfileToggle: false,
                  signUpToggle: false,
                })} className={`bg-black fixed inset-0 opacity-0 z-[80] ${navPopUpToggle?.menuProfileToggle ? 'block' : 'hidden'}`}>

                </div>

              </div>

              {/* search calender */}
              <>
                {
                  searchText && (
                    <div className='flex flex-col col-span-3 mx-auto'>
                      <DateRangePicker ranges={[selectionRange]} minDate={new Date()} rangeColors={['#fd5b61']} onChange={handleSelect} />
                      <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>

                        {/* profile icon */}
                        <div className='cursor-pointer'>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                          </svg>
                        </div>

                        <input type="number" value={noOfUsers} onChange={(e) => setNoOfUsers(e?.target?.value)} className='w-full outline-none pl-2 max-w-[50px] text-red-400 text-lg' min={1} />
                      </div>
                      <div className='flex'>
                        <button className='flex-1 text-gray-500 hover:bg-gray-100 py-1 rounded-full active:scale-95 transition-all duration-100' onClick={() => setSearchText('')}>Cancel</button>
                        <button onClick={handleSearchPage} className='flex-1 inline-block hover:bg-gray-100 py-1 rounded-full active:scale-95 transition-all duration-100 text-red-400'>Search</button>
                      </div>
                    </div>
                  )
                }

              </>
            </>
        }
      </nav>

      {/* sign up popup */}
      <div className={`w-[95%] mx-auto min-w-[300] lg:min-w-[400px] xl:min-w-[500px] max-w-[500px] min-h-[58vh] absolute top-[20%] right-0 md:right-[13%] lg:right-[23%] xl:right-[35%] bg-white rounded-[15px] shadow-xl z-[90] ${navPopUpToggle?.signUpToggle ? 'block' : 'hidden'}`}>
        <div className='flex border-b py-4'>
          <div className='w-full max-w-[30px] ml-2 cursor-pointer' onClick={() => setNavPopUpToggle({
            ...navPopUpToggle,
            signUpToggle: false,
          })}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          {/* <p className='w-full max-w-[30px] border flex justify-center items-center pb-1'>x</p> */}
          <p className='flex-grow text-center mr-5'>Login or Sign Up</p>
        </div>
        <div className='px-5 pb-5 pt-7'>
          <h1 className='font-[500] text-[22px]'>Welcome to AirBnB</h1>

          <div className='w-full rounded-[15px] border-2 mt-5'>
            <div className='flex flex-col rounded-[15px] '>
              <input type="text" className='w-full  rounded-[15px] outline-none px-3 text-[14px] popins py-2' placeholder='Email' />
              <div className='w-full pt-[2px] bg-gray-300'></div>
              <input type="number" min={0} className='w-full  rounded-[15px] outline-none px-3 text-[14px] popins py-2' placeholder='Phone Number' />
            </div>
            {/* <div>Country Code</div>
            <div>Phone number</div> */}
          </div>
          <div className='pl-2'>
            <p className='text-[10px] mt-2'>We’ll call or text you to confirm your number. Standard message and data rates apply. <span className='underline'>Privacy Policy</span></p>
          </div>
          <div className='w-full mt-4'>
            <button className='w-full shadow-md active:scale-95 transition-all duration-200 ease-out font-[500] text-white bg-red-400 p-2 rounded-[15px] flex justify-center items-center'>CONTINUE</button>
          </div>
          <div className='flex justify-center items-center gap-3 mt-5'>
            <div className='flex-grow pt-[1px] bg-gray-300'></div>
            <div>or</div>
            <div className='flex-grow pt-[1px] bg-gray-300'></div>
          </div>
          <div className='flex flex-col gap-5 mt-5'>

            {/* facebook login */}
            <div className='w-full border border-black flex justify-center items-center relative cursor-pointer py-[10px] rounded-[15px] hover:bg-blue-400 hover:text-white transition-all duration-200 ease-out'>

              {/* facebook icon */}
              <div className='absolute top-0 left-0'>

              </div>

              <p className='text-[16px] font-[500]'>Continue with Facebook</p>
            </div>

            {/* google login */}
            <div className='w-full border border-black flex justify-center items-center relative cursor-pointer py-[10px] rounded-[15px] hover:bg-red-500 hover:text-white transition-all duration-200 ease-out'>

              {/* google icon */}
              <div className='absolute top-0 left-0'>

              </div>

              <p className='text-[16px] font-[500]'>Continue with Google</p>
            </div>

            {/* apple login */}
            <div className='w-full border border-black flex justify-center items-center relative cursor-pointer py-[10px] rounded-[15px] hover:bg-gray-200 hover:text-black transition-all duration-200 ease-out'>

              {/* apple icon */}
              <div className='absolute top-0 left-0'>

              </div>

              <p className='text-[16px] font-[500]'>Continue with Apple</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div onClick={() => setNavPopUpToggle({
        ...navPopUpToggle,
        menuProfileToggle: false,
        signUpToggle: false,
      })} className={`bg-black fixed inset-0 opacity-0 z-[80] ${navPopUpToggle?.menuProfileToggle ? 'block' : 'hidden'}`}>

    </div > */}

    </>
  )
}

export default Navbar


