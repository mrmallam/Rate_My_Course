import '../styles/Reviews.css';
import Review from '../components/Review';
import UniLogo from '../resources/logo-ucalgary.jpg'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

import React from 'react';


function Reviews() {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <div className='class-header flex items-center'>
            <img src={UniLogo} alt="University-Logo" className="w-24"/>
            <h1 className="text-3xl">SENG 513</h1>
            </div>
            <Review/>
            <div className='buttons-container'>
                <button 
                className='rounded-xl h-20 w-28 bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-900 m-3'
                onClick={() => navigate(-1)}>
                    Cancel</button>
                <button 
                className='rounded-xl h-20 w-28 bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-900 m-3'
                onClick={() => navigate(-1)}>
                    Submit</button>
            </div>
        </div>
    );
  }
  
  export default Reviews;