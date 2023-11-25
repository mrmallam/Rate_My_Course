import React, { useState } from 'react';
import '../styles/OverallCourseReviews.css'; // Adjust the path to your CSS file
import uni_logo from '../resources/logo-ucalgary.jpg';

function OverallCourseReviews() {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);


  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleOnChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  return (
    <div className='flex flex-col items-left justify-center mt-5 ml-5'>
        <div className="flex items-center border-2 border-red-500 shadow-lg h-14 w-2/4">
            <input
            className="flex-1 px-6 h-full rounded-full text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Enter University..."
            />
            <button className="flex-shrink-0 w-auto h-full text-red-500 flex items-center justify-center">
            <svg className="w-6 h-7 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 16C6.58 16 3 12.42 3 8c0-4.42 3.58-8 8-8s8 4.58 8 8c0 3.58-2.92 6.42-6.62 7.93"></path></svg>
            </button>
        </div>

        <div className='flex justify-between text-sm mt-5 w-2/4'>
            <p  className=' mt-1'>00 Results</p>

            <div className='flex justify-between'>
                <label className="switch">
                    <input type="checkbox" checked={isChecked} onChange={handleOnChange}/>
                    <span className="slider round"></span>
                </label>
                <p className=' mt-1 ml-2'>Sort Newest-Oldest</p>
            </div>

            <div className='flex justify-between'>
                <label className="switch">
                    <input type="checkbox" checked={isChecked2} onChange={handleOnChange2}/>
                    <span className="slider round"></span>
                </label>
                <p className=' mt-1 ml-2'>Sort Oldest - Newest</p>
            </div>
        </div>

        <div className='h-72 mt-6 border-2 border-red-600 container shadow-lg py-2'>
            <div className='flex items-center'>
                <img src={uni_logo} className="h-16 md:h-20 object-contain" alt='logo' />
                <span className="block text-lg md:text-2xl font-normal text-left">University of Calgary</span>
            </div>
            <div className='mt-6 h-2/4 ml-4'>
                <span className="block text-gray-400 text-md ftext-left ">Course Description:</span>
                <span className="block text-gray-400 mt-6 w-1/2 text-md ftext-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
        </div>

        <div className='w-1/4 h-20 border-red-600 container py-2 mt-20'>
            <span className="block text-md ftext-left text-black 200 ">Review #1</span>
        </div>
    </div>
  );
}

export default OverallCourseReviews;
