import '../styles/Reviews.css';
import React, { useState } from 'react';
import Date from './Date';
import thumbsUpBlank from '../resources/thumbs-up.svg';
import thumbsUpGreen from '../resources/thumbs-up-green.svg';

function RatingSet ({label, rating, setRating}) {
  const levels = [1,2,3,4,5];

  return (
    <div className="flex items-center space-x-2">
      {levels.map((level) => (
        <button
          key={level}
          className={`h-8 w-8 rounded-full cursor-default ${rating >= level ? 'bg-red-600' : 'bg-red-200'}`}
          aria-label={`Set ${label} to ${level}`}
        />
      ))}
      <span>{label}</span>
    </div>
  );
}

function OverarallReviews() {
    const [professor, setProfessor] = useState('Joseph James');
    const [difficulty, setDifficulty] = useState(5);
    const [workload, setWorkload] = useState(2);
    const [usefulness, setUsefulness] = useState(3);
    const [comments, setComments] = useState('Great course!');
    const [university, setUniversity] = useState('Test Uni');
    const [courseNum, setCourseNum] = useState('Test CourseNum');
    const [courseCode, setCourseCode] = useState('Test CourseCode');
    const [thumbsUpClicked, setThumbsUpClicked] = useState(false);

    const handleThumbsUpClick = () => {
        setThumbsUpClicked(!thumbsUpClicked);
        //for back end logic
      };  

    return (
        <div className='md:flex-row w-full'>
            <div className='form-container-3'>
                <div className='ml-4'>
                    <input
                    readOnly={true}
                    type="text"
                    value={university}
                    className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5 focus:outline-none cursor-default" 
                    placeholder="University"
                    />
                    <input
                        readOnly={true}
                        type="text"
                        value={courseCode}
                        className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5 focus:outline-none cursor-default"
                        placeholder="Course Code"
                    />
                    <input
                        readOnly={true}
                        type="text"
                        value={courseNum}
                        className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5 focus:outline-none cursor-default"
                        placeholder="Course Number"
                    />
                    <input
                        readOnly={true}
                        type="text"
                        value={professor}
                        className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 focus:outline-none cursor-default"
                        placeholder="Professor's Name"
                    />
                </div>
                <div className='my-4 pl-4'>
                    <RatingSet label='Difficulty' rating={difficulty} />
                </div>
                <div className='my-4 pl-4'>
                    <RatingSet label='Workload' rating={workload} />
                </div>
                <div className='my-4 pl-4'>
                    <RatingSet label='Usefulness' rating={usefulness} />
                </div>
                <div
                    className='form-input flex-grow py-2 px-4 border-2 border-red-600 my-4 mx-5 sm:min-h-[200px]'
                >
                    {comments}
                </div>

                <div className='ml-8 mt-2 mb-2 font-bold flex'>
                    <div onClick={handleThumbsUpClick}>
                        <img src={thumbsUpClicked ? thumbsUpGreen : thumbsUpBlank} className="h-6 w-6 cursor-pointer" alt="thumbs-up"/>
                    </div>
                    <span className="text-md text-black ml-3">Upvote This Post?</span>
                </div>
                <div className='ml-8 mt-2 mb-2 font-bold'>
                    <span className="text-md text-gray-400">12 others found this post useful</span>
                </div>

            </div>
  
            <Date></Date>
        </div>
    );
  }
  
  export default OverarallReviews;