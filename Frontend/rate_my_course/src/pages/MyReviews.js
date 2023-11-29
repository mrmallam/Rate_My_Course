import React, { useState, useEffect } from "react";
import arrowLeft from '../resources/arrow-left.svg';
import '../styles/MyReviews.css';
import userImage from '../resources/user-image.svg';
import bookMark from '../resources/bookmark.svg';
import bookMarkBlank from '../resources/bookmark-blank.svg';
import StaticReview from "../components/StaticReview";
import EditableReview from "../components/EditableReview";
import RatedReview from "../components/RatedReview";


const MyReviews = () => {
    const [activeTab, setActiveTab] = useState('myReviews');
    const [showPopup, setShowPopup] = useState(false);
    const [coursesToRemove, setCoursesToRemove] = useState([]);

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

    const handleBookmarkClick = (courseName) => {
        const isSelected = coursesToRemove.includes(courseName);

        if (isSelected) {
            // remove a course from the list of courses to be removed
            setCoursesToRemove(coursesToRemove.filter(course => course !== courseName));
        } else {
            // add a course to the list of courses to be removed
            setCoursesToRemove([...coursesToRemove, courseName]);
        }
    };

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

    const likedReviews = [
        <RatedReview key={1} />,
        <RatedReview key={2} />
    ];
    return (
        <div className="flex flex-col w-full">
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
            <div className='nav-bar text-lg sm:text-base'>
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
                )}
                {activeTab === 'ratedReviews' && (
                    <div className="rated-reviews">
                        <div>
                            {likedReviews.map((ratedReview, index) => (
                                <div key={index} className="review">
                                    {ratedReview}
                                </div>
                            ))}
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
                )}
                {activeTab === 'watchedCourses' && (
                    <div className="watched-courses">
                        <div className="header">Your watched course</div>
                        <div> Search Bar</div>
                        {coursesData.map((course) => (
                            <div key={course.name} className="course">
                                <div className="course-information">
                                    <img
                                        src={coursesToRemove.includes(course.name) ? bookMarkBlank : bookMark}
                                        className="bookmark"
                                        alt="bookmark"
                                        onClick={() => handleBookmarkClick(course.name)}
                                    />
                                    {course.name}
                                    <img src = {bookMark} className="bookmark" alt="bookmark"/>
                                    SENG 513
                                </div>
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