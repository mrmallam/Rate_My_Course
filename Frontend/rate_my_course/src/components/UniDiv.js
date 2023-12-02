import React from 'react'
import uni_logo from '../resources/logo-ucalgary.jpg';

export default function Uni_div({ data }) {

  if (data) {
    return (
      <div className=' w-3/4 md:w-4/12 h-24 mt-6 border-2 border-red-600 container shadow-lg py-2 flex items-center justify-between'>
        <img src={uni_logo} className="h-16 md:h-20 object-contain w-1/3 md:w-1/4" alt='logo' />
        <div className='w-2/3 md:w-3/4 px-2 md:pl-7'>
          <span className="block text-lg md:text-2xl font-normal text-left">{data.name}</span>
          <span className="block text-xs md:text-sm text-gray-500 font-normal">{data.reviewNum} reviews</span>
        </div>
      </div>
    )
  }
}
