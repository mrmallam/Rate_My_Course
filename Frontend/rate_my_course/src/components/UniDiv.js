import React from 'react'
import uni_logo from '../resources/logo-ucalgary.jpg';

export default function Uni_div() {
  return (
    <div className='w-4/12 h-24 mt-6 border-2 border-red-600 container shadow-lg py-2 flex items-center justify-between max-w-md mx-auto'>
      <img src={uni_logo} className=" h-20 object-contain w-1/4" alt='logo' />
      <div className='  w-3/4 pl-7'>
        <span className="block text-2xl font-normal text-left">University of Calgary</span>
        <span className="block  text-gray-500 font-normal">407 Reviews</span>
      </div>
    </div>
    )
}






