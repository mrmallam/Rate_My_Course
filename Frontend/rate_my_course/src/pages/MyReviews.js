import React, { useState, useEffect } from "react";
import arrowLeft from '../resources/arrow-left.svg';
import '../styles/MyReviews.css';
import userImage from '../resources/user-image.svg';
import editImage from '../resources/edit.svg';
import deleteImage from '../resources/delete.svg';
import thumbsUp from '../resources/thumbs-up-green.svg';
import thumbsDown from '../resources/thumbs-down.svg';
import bookMark from '../resources/bookmark.svg';
import Reviews from '../components/Reviews';
const MyReviews = () => {
    const [activeTab, setActiveTab] = useState('myReviews');
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
            <Reviews />
        </div>
    );
    return (
        <div className="flex flex-col">
            <div className={`${showPopup ? 'overlay' : ''}`}></div>
            <div className="top-row">
                <img src = {arrowLeft} className="arrow-left" alt="arrow-left"/>
            </div>
            <div className="user-info">
                <div className="userImage">
                    <img src = {userImage} className="user-image" alt="user-image"/>
                </div>
                <div className="flex flex-col">
                    <div className="user-name">
                        <p>{name}</p>
                    </div>
                    <div className="user-year">
                        <p>{yearOfStudy}</p>
                    </div>
                    <div className="user-course">
                        <p>{course} Student</p>
                    </div>
                    <div className="user-university">
                        <p>{university}</p>
                    </div>
                </div>
            </div>
            <div className='nav-bar'>
                <div
                    className={`nav-bar-item ${activeTab === 'myReviews' ? 'active' : ''}`}
                    onClick={() => handleTabClick('myReviews')}
                >
                    <p>My Reviews</p>
                </div>
                <div
                    className={`nav-bar-item ${activeTab === 'ratedReviews' ? 'active' : ''}`}
                    onClick={() => handleTabClick('ratedReviews')}
                >
                    <p>Rated Reviews</p>
                </div>
                <div 
                    className={`nav-bar-item ${activeTab === 'watchedCourses' ? 'active' : ''}`}
                    onClick={() => handleTabClick('watchedCourses')}
                >
                    <p>Watched Courses</p>
                </div>
            </div>
            <div className="content">
                {activeTab === 'myReviews' && (
                    <div className="review-content">
                        <button
                            className={`new-review-button ${showPopup ? 'disabled' : ''}`}
                            onClick={handleNewReviewClick}
                            disabled={showPopup}
                        >
                            New Review
                        </button>
                        <div>
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
                                    <div className="edit-button">
                                        <img src = {editImage} className="icons" alt="edit-image"/>
                                    </div>
                                    <div className="delete-button">
                                        <img src = {deleteImage} className="icons" alt="delete-image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'ratedReviews' && (
                    <div className="rated-reviews">
                        <div>
                            <div className="review">
                                <div className="review-information">
                                    <div className="review-header">
                                        <div className="review-course">
                                            <p>SENG 513</p>
                                        </div>
                                        <div className="review-rating">
                                            <p>5/5</p>
                                        </div>
                                    </div>
                                    <div className="review-body">
                                        <p>information</p>
                                    </div>
                                </div>
                                <div className="modifications">
                                    <div className="edit-button">
                                        <img src = {thumbsUp} className="icons" alt="thumbs-down"/>
                                    </div>
                                    <div className="delete-button">
                                        <img src = {thumbsDown} className="thumbs-down" alt="delete-image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'watchedCourses' && (
                    <div className="watched-courses">
                        <div className="header">Your watched course</div>
                        <div> Search Bar</div>
                        <div className="courses">
                            <div className="course">
                                <div className="course-information">
                                    <img src = {bookMark} className="bookmark" alt="bookmark"/>
                                    SENG 513
                                </div>
                                <div>
                                    <div className="review">
                                        <div className="review-information">
                                            <div className="review-header">
                                                <div className="review-course">
                                                    <p>SENG 513</p>
                                                </div>
                                                <div className="review-rating">
                                                    <p>5/5</p>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <p>information</p>
                                            </div>
                                        </div>
                                    </div>
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