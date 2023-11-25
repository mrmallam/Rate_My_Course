import React from 'react'
import LogoRed from '../resources/logo-red.png';
import {Link} from 'react-router-dom';


export default function Header() {
  return (
    <div className='h-28 w-screen bg-red-600 flex items-center justify-between flex-wrap px-4 md:px-10'>

      <img src={LogoRed} className='h-16 w-16 md:h-24 md:w-24' alt='logo' />

      <div className='flex flex-wrap justify-center'>
          <Link to="/signup">
              <button className="rounded-xl h-12 w-20 md:h-20 md:w-28 bg-red-700 text-white font-bold py-1 md:py-2 px-2 md:px-4 focus:outline-none focus:shadow-outline hover:bg-red-900 m-2">
                  Sign Up
              </button>
          </Link>

          <Link to="/login">
              <button className="rounded-xl h-12 w-20 md:h-20 md:w-28 bg-red-700 text-white font-bold py-1 md:py-2 px-2 md:px-4 focus:outline-none focus:shadow-outline hover:bg-red-900 m-2">
                  Log In
              </button>
          </Link>
      </div>
    </div>
  )
} 



