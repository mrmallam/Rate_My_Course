import React from 'react'
import Header from '../components/Header'; 
import LogoWhite from '../resources/logo-white.png';
import '../styles/LandingPage.css';

function LandingPage() {
    return (
      <div className="">
        <Header />

        <div className='flex flex-col items-center justify-center'>
          <img src={LogoWhite} className=' max-h-72' alt='logo' />

          <div className="flex items-center border-2 border-red-500 shadow-lg w-full md:w-1/4  h-14">
            <input
              className="flex-1 px-6 h-full rounded-l-full text-gray-700 leading-tight focus:outline-none"
              id="search"
              type="text"
              placeholder="Enter University..."
            />
            <button className="w-12 h-full text-red-500 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 16C6.58 16 3 12.42 3 8c0-4.42 3.58-8 8-8s8 4.58 8 8c0 3.58-2.92 6.42-6.62 7.93"></path></svg>
            </button>
          </div>

          <div className='flex justify-between mt-5 text-sm' style={{ width: '21rem' }}>
            <p  className=' mt-1'>00 Results</p>

            <div className='flex justify-between'>
              <label className="switch">
                <input type="checkbox" checked/>
                <span className="slider round"></span>
              </label>
              <p className=' mt-1 ml-2'>Sort A-Z</p>
            </div>
          </div>


        </div>

      </div>
    );
  }
  
  export default LandingPage;