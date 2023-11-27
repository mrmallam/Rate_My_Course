import React, { useState } from 'react';
import uni_logo from '../resources/logo-ucalgary.jpg';
import Reviews from '../components/Reviews';
import Stars from '../resources/stars.jpg';


function OverallCourseReviews() {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [courseCode, setCourseCode] = useState('Professor');


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
            placeholder="Enter Course..."
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

            <select value={courseCode} 
                onChange={e => setCourseCode(e.target.value)}
                className='border-2 border-red-600 rounded-full p-1'>
                <option value='SENG'>Professors</option>
                <option value='CPSC'>Professor 1</option>
                <option value='CPSC'>Professor 2</option>
            </select>

        </div>

        <div className='h-72 mt-6 border-2 border-red-600 w-1/2 shadow-lg py-2 mb-6'>
            <div className='flex items-center'>
                <img src={uni_logo} className="h-16 md:h-20 object-contain" alt='logo' />
                <span className="block text-lg md:text-2xl font-normal text-left">SENG 513</span>
            </div>
            <div className='mt-4 h-2/4 ml-4 flex'>
                <div className='w-1/2'>
                    <span className="block text-gray-400 text-md ftext-left">Course Description:</span>
                    <span className="block text-gray-400 mt-6 text-md ftext-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                </div>
                <div className=' ml-16'>
                    <img src={Stars} className="md:h-14 object-contain" alt='stars' />
                    <img src={Stars} className="md:h-14 object-contain" alt='stars' />
                    <img src={Stars} className="md:h-14 object-contain" alt='stars' />
                </div>
            </div>
        </div>

        <button className='h-16 w-1/6 bg-red-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline hover:bg-red-900'>Leave a New Review
        </button>

        <div className='mt-6 bg-red-600 border-2 border-red-600 font-bold shadow-lg py-2 px-2 w-1/6'>
            <span className="text-md text-white text-center">Review #1</span>
        </div>
        <Reviews/>

        <div className='mt-6 bg-red-600 border-2 border-red-600 font-bold shadow-lg py-2 px-2 w-1/6'>
            <span className="text-md text-white text-center">Review #2</span>
        </div>
        <Reviews/>

    </div>
  );
}

export default OverallCourseReviews;
