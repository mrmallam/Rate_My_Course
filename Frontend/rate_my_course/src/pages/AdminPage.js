import React, { useState, useEffect } from "react";
import adminImage from '../resources/admin-image.svg';
import arrowLeft from '../resources/arrow-left.svg';
import '../styles/MyReviews.css';
import userImage from '../resources/user-image.svg';
import bookMark from '../resources/bookmark.svg';
import bookMarkBlank from '../resources/bookmark-blank.svg';
import StaticReview from "../components/StaticReview";
import ReportedReview from "../components/ReportedReview";
import RatedReview from "../components/RatedReview";


const MyReviews = () => {
    const [activeTab, setActiveTab] = useState('reportedPosts');
    const [showPopup, setShowPopup] = useState(false);

    var name = "John Smith";
    var yearOfStudy = "Rate My Course Admin";
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
            <button onClick={handlePopupClose}>X</button>
            <div>Test</div>
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
        <ReportedReview key={1} />,
        <ReportedReview key={2} />
    ];

    
    return (
        <div className="flex flex-col w-full">
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
            <div className='nav-bar text-lg sm:text-base'>
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
                        <button
                            className={`new-review-button ${showPopup ? 'disabled' : ''}`}
                            onClick={handleNewReviewClick}
                            disabled={showPopup}
                        >
                            New Review
                        </button>
                        <div>
                            {reviewData.map((reportedReview, index) => (
                                <div key={index} className="review">
                                    {reportedReview}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            {showPopup && <PopupContent />}
        </div>
    )
}
export default MyReviews;