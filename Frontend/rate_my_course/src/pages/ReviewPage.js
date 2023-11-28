import '../styles/Reviews.css';
import Review from '../components/Review';
import UniLogo from '../resources/logo-ucalgary.jpg'

import React from 'react';


function Reviews() {
    return (
        <div>
            <div className='class-header flex items-center'>
            <img src={UniLogo} alt="University-Logo" className="w-24"/>
            <h1 className="text-3xl">SENG 513</h1>
            </div>
            <Review/>
        </div>
    );
  }
  
  export default Reviews;