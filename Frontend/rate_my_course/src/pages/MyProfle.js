import React, { useState, useEffect } from "react";
import arrowLeft from '../resources/arrow-left.svg';
import '../styles/MyReviews.css';
import userImage from '../resources/user-image.svg';
import bookMark from '../resources/bookmark.svg';
import bookMarkBlank from '../resources/bookmark-blank.svg';
import StaticReview from "../components/StaticReview";
import EditableReview from "../components/EditableReview";
import RatedReview from "../components/RatedReview";
import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import Header from '../components/Header';

const MyProfile = () => {
    const [activeTab, setActiveTab] = useState('myReviews');
    const [showPopup, setShowPopup] = useState(false);
    const [coursesToRemove, setCoursesToRemove] = useState([]);
    const navigate = useNavigate();

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
            <div className="flex flex-col w-full">
                <div className={`${showPopup ? 'overlay' : ''}`}></div>
                <div className="top-row">
                    <img src = {arrowLeft} 
                    className="arrow-left" 
                    alt="arrow-left"
                    onClick={() => navigate(-1)}/>
                </div>
                <div className="user-info justify-center">
                    <div className="userImage">
                        <img src = {userImage} className="user-image" alt="user-image"/>
                    </div>
                    <div className="flex flex-col ml-2">
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

                <div className="content2">
                    {activeTab === 'myReviews' && (
                        <div className="review-content">
                            <Link to="/Review">
                                <button
                                    className={`new-review-button ${showPopup ? 'disabled' : ''}`}
                                    onClick={handleNewReviewClick}
                                    disabled={showPopup}
                                >
                                    New Review
                                </button>
                            </Link>
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
                                {likedReviews.map((ratedReview, index) => (
                                    <div key={index} className="review">
                                        {ratedReview}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {activeTab === 'watchedCourses' && (
                        <div className="watched-courses">
                            <div className="header">Your watched courses</div>
                            {coursesData.map((course) => (
                                <div key={course.name} className="course">
                                    <div className="course-information mt-4">
                                        <img
                                            src={coursesToRemove.includes(course.name) ? bookMarkBlank : bookMark}
                                            className="bookmark"
                                            alt="bookmark"
                                            onClick={() => handleBookmarkClick(course.name)}
                                        />
                                        {course.name}
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
        </div>
    )
}
export default MyProfile;