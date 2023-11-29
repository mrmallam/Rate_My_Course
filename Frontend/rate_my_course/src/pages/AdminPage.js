import React, { useState, useEffect } from "react";
import arrowLeft from '../resources/arrow-left.svg';
import '../styles/MyReviews.css';
import adminImage from '../resources/admin-image.svg';
import editImage from '../resources/edit.svg';
import deleteImage from '../resources/delete.svg';
import thumbsUp from '../resources/thumbs-up-green.svg';
import thumbsDown from '../resources/thumbs-down-red.svg';
import bookMark from '../resources/bookmark.svg';


const MyReviews = () => {
    const [activeTab, setActiveTab] = useState('reportedPosts');
    const [showPopup, setShowPopup] = useState(false);
    var name = "Jane Doe";
    var yearOfStudy = "3rd Year";
    var course = "Computer Science"
    var university = "University of Calgary";
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const handleNewReviewClick = () => {
        setShowPopup(true);
    };

    const handlePopupClose = () => {
        setShowPopup(false);
    };

    const PopupContent = () => (
        <div className="popup">
            {/* Your form elements go here */}
            <button onClick={handlePopupClose}>X</button>
            <div>Test</div>
        </div>
    );
    return (
        <div className="flex flex-col">
            <div className={`${showPopup ? 'overlay' : ''}`}></div>
            <div className="top-row">
                <img src = {arrowLeft} className="arrow-left" alt="arrow-left"/>
            </div>
            <div className="user-info">
                <div className="adminImage">
                    <img src = {adminImage} className="admin-image w-24 h-24" alt="admin-image"/>
                </div>
                <div className="flex flex-col">
                    <div className="user-name ml-2">
                        <p>{name}</p>
                    </div>
                    <div className="user-year ml-2">
                        <p>{yearOfStudy}</p>
                    </div>
                    <div className="user-course ml-2">
                        <p>{course} Student</p>
                    </div>
                    <div className="user-university ml-2">
                        <p>{university}</p>
                    </div>
                </div>
            </div>
            <div className='nav-bar'>
                <div
                    className={`nav-bar-item ${activeTab === 'reportedPosts' ? 'active' : ''}`}
                    onClick={() => handleTabClick('reportedPosts')}>
                    <p>Reported Posts</p>
                </div>
            </div>

            <div className='ml-8 mt-2 mb-6 font-bold w-1/6'>
                <span className="text-md text-black">1 Report Pending:</span>
            </div>

            <div className="content">
                {activeTab === 'reportedPosts' && (
                    <div className="review-content">
                            <div className="review">
                                <div className="review-information">
                                    <div className="review-header">
                                        <div className="review-course">
                                            <p>CPSC 471</p>
                                        </div>
                                        <div className="review-rating">
                                            <p>4/5</p>
                                        </div>
                                    </div>
                                    <div className="review-body">
                                        <p>This is a review for CPSC 471</p>
                                    </div>
                                </div>
                                <div className="modifications">
                                    <div className="edit-button flex">
                                        <button className='h-10 w-1/8 bg-green-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline hover:bg-green-900'>Approve
                                        </button>
                                    </div>
                                    <div className="delete-button flex">
                                        <button className='h-10 w-1/8 bg-red-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline hover:bg-red-900'>Remove
                                        </button>                                    
                                    </div>
                                </div>
                        </div>
                    </div>
                )}
            </div>
            {showPopup && <PopupContent />}
        </div>
    )
}
export default MyReviews;