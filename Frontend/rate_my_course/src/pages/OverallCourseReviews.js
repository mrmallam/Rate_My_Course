import React, { useState, useEffect } from 'react';
import uni_logo from '../resources/logo-ucalgary.jpg';
import Stars from '../resources/stars.jpg';
import { Link, useParams } from "react-router-dom";
import ReportedReview from '../components/ReportedReview';
import OverarallReviews from '../components/OverallReviews';
import Header from '../components/Header';


function OverallCourseReviews() {
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [courseCode, setCourseCode] = useState('Professor');
    const [course, setCourse] = useState('');
    const [reviews, setReviews] = useState([]);
    const { courseName } = useParams();

    useEffect(() => {
        if(courseName) {
            const decodedCourseName = decodeURIComponent(courseName);
            fetch(`http://localhost:8000/api/Course/${decodedCourseName}/`, {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                }
            })
            .then(resp => resp.json())
            .then((data) => { setCourse(data); })
            .catch(error => console.log(error))


            fetch(`http://localhost:8000/api/Review/${decodedCourseName}/`, {
                method: 'GET',
                headers: {
                    'Content-Type':'application/json',
                }
            })
            .then(resp => resp.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setReviews(data);
                } else {
                    setReviews([data]); // Convert to array if it's a single object
                }
            })
            .catch(error => console.log(error))
        }

        
    }, []);

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
                        <span className="block text-2xl font-normal text-left">{course.name}</span>
                    </div>
                    <div className='flex flex-col md:flex-row mt-4 ml-4'>
                        <div className='w-full'>
                            <span className="block text-gray-400 text-md ftext-left">Course Description:</span>
                            <span className="block text-gray-400 mt-6 text-md ftext-left">{course.description}</span>
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
                
                {reviews.map((result, index) => (
                    <OverarallReviews data={result} index={index} key={result.id} />
                ))}

            </div>
        </div>
    );
}

export default OverallCourseReviews;
