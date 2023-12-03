import React, { useState } from 'react';
import uni_logo from '../resources/logo-ucalgary.jpg';
import Stars from '../resources/stars.jpg';
import { Link } from "react-router-dom";
import ReportedReview from '../components/ReportedReview';
import OverarallReviews from '../components/OverallReviews';
import Header from '../components/Header';


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
    <div>
        <Header/>
        <div className='flex flex-col items-left justify-center mt-5 mx-10 md:mx-10'>
            <div className="flex items-center border-2 border-red-500 shadow-lg h-14 w-full md:w-2/4">
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

            <div className='flex justify-between text-sm mt-5 w-full md:w-1/2'>
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

            <div className='h-auto md:h-auto mt-6 border-2 border-red-600 w-full md:w-2/3 shadow-lg py-2 mb-6 px-4 md:px-6'>
                <div className='flex items-center'>
                    <img src={uni_logo} className="h-16 md:h-20 object-contain" alt='logo' />
                    <span className="block text-2xl font-normal text-left">SENG 513</span>
                </div>
                <div className='flex flex-col md:flex-row mt-4 ml-4'>
                    <div className='w-full'>
                        <span className="block text-gray-400 text-md ftext-left">Course Description:</span>
                        <span className="block text-gray-400 mt-6 text-md ftext-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                    </div>
                    <div className='md:ml-8 w-full md:w-auto md:mt-0 mt-6'>
                        <p className="block text-gray-400 text-md ftext-left">Average Difficulty:</p>
                        <img src={Stars} className="h-16 md:h-18 object-contain md:mx-0" alt='stars' />
                        <p className="block text-gray-400 text-md ftext-left">Average Quality:</p>
                        <img src={Stars} className="h-16 md:h-18 object-contain md:mx-0" alt='stars' />
                        <p className="block text-gray-400 text-md ftext-left">Average Usefulness:</p>
                        <img src={Stars} className="h-16 md:h-18 object-contain md:mx-0" alt='stars' />
                    </div>
                </div>
            </div>

            <Link to="/Review">
                <button className='h-16 w-1/2 md:w-1/6 bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-900'>Leave a New Review
                </button>
            </Link>

            <span className="text-md mt-6 text-black">Showing 2 Reviews: </span>

            <div className='mt-6 bg-red-600 border-2 border-red-600 font-bold shadow-lg py-2 px-2 w-1/2 md:w-1/6'>
                <span className="text-md text-white text-center">Review #1</span>
            </div>
            <OverarallReviews/>

            <div className='mt-6 bg-red-600 border-2 border-red-600 font-bold shadow-lg py-2 px-2 w-1/2 md:w-1/6'>
                <span className="text-md text-white text-center">Review #2</span>
            </div>
            <OverarallReviews/>

        </div>
    </div>
  );
}

export default OverallCourseReviews;
