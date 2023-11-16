import React from 'react'
import LogoRed from '../resources/logo-red.png';

export default function Header() {
  return (
    <div className=' h-28 w-screen bg-red-600 flex items-center justify-between'>

        <img src={LogoRed} className='h-24 w-24 ml-10' alt='logo' />

        <div>
            <button className=" rounded-xl h-20 w-28 bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-900 m-3">
                Sign Up
            </button>

            <button className=" rounded-xl h-20 w-28 bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-900 m-3 mr-10">
                Log In
            </button>
        </div>
    </div>
  )
}
