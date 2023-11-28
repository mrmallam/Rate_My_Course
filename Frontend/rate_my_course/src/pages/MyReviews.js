import React, { useState, useEffect } from "react";
import arrowLeft from '../resources/arrow-left.svg';
import '../styles/MyReviews.css';
import userImage from '../resources/user-image.svg';
import thumbsUp from '../resources/thumbs-up-green.svg';
import thumbsDown from '../resources/thumbs-down.svg';
import bookMark from '../resources/bookmark.svg';
import Reviews from "../components/Reviews";
import StaticReview from "../components/StaticReview";
import EditableReview from "../components/EditableReview";
const MyReviews = () => {
    const [activeTab, setActiveTab] = useState('myReviews');
    const [showPopup, setShowPopup] = useState(false);
    let name = "Jane Doe";
    let yearOfStudy = "3rd Year";
    let course = "Computer Science"
    let university = "University of Calgary";
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
            <button onClick={handlePopupClose}>X</button>
            <StaticReview />
        </div>
    );

    const coursesData = [
        {
            name: "SENG 513",
            reviews: [
            <StaticReview key={1} />,
            <StaticReview key={2} />,
            ],
        },
        {
            name: "SENG 511",
            reviews: [
                <StaticReview key={1} />,
                <StaticReview key={2} />,
            ],
            }
    ];

    const reviewData = [
        <EditableReview key={1} />,
        <EditableReview key={2} />
    ];

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
                        {reviewData.map((editableReview, index) => (
                            <div key={index} className="review">
                                {editableReview}
                            </div>
                            ))}
                        </div>
                    </div>
                )}
                {activeTab === 'ratedReviews' && (
                    <div className="rated-reviews">
                        <div>
                            <div className="review">
                                <StaticReview />
                                <div className="modifications">
                                    <div>
                                        <img src = {thumbsUp} className="icons" alt="thumbs-down"/>
                                    </div>
                                    <div>
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
                        {coursesData.map((course) => (
                            <div key={course.name} className="course">
                            <div className="course-information">
                                <img src={bookMark} className="bookmark" alt="bookmark" />
                                {course.name}
                            </div>
                            {/* Map over reviews to render StaticReview components */}
                            {course.reviews.map((review, index) => (
                                <StaticReview key={index} {...review} />
                            ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {showPopup && <PopupContent />}
        </div>
    )
}
export default MyReviews;