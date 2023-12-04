import '../styles/Reviews.css';
import thumbsUpGreen from '../resources/thumbs-up-green.svg';
import thumbsDownBlank from '../resources/thumbs-down.svg';
import thumbsDownRed from '../resources/thumbs-down-red.svg';
import thumbsUpBlank from '../resources/thumbs-up.svg';
import React, { useState } from 'react';

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

function StaticReview() {
    const [professor, setProfessor] = useState('Joseph James');
    const [difficulty, setDifficulty] = useState(5);
    const [workload, setWorkload] = useState(2);
    const [usefulness, setUsefulness] = useState(3);
    const [comments, setComments] = useState('Great course!');
    const [thumbsUpClicked, setThumbsUpClicked] = useState(false);
    const [thumbsDownClicked, setThumbsDownClicked] = useState(false);
    const [university, setUniversity] = useState('Test Uni');
    const [courseNum, setCourseNum] = useState('Test CourseNum');
    const [courseCode, setCourseCode] = useState('Test CourseCode');


    const handleThumbsUpClick = () => {
        setThumbsUpClicked(!thumbsUpClicked);
        setThumbsDownClicked(false);
        //for back end logic
    };

    const handleThumbsDownClick = () => {
        setThumbsUpClicked(false);
        setThumbsDownClicked(!thumbsDownClicked);
        // for back end logic
    };


    return (
        <div className='flex flex-col md:flex-row w-full py-8'>
            <div className='form-container-3 w-[93%]'>
                <div className='ml-4 mr-4'>
                    <input
                        readOnly={true}
                        type="text"
                        value={university}
                        className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5 w-full md:w-min focus:outline-none cursor-default" 
                        placeholder="University"
                    />
                    <input
                        readOnly={true}
                        type="text"
                        value={courseCode}
                        className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5 w-full md:w-min focus:outline-none cursor-default"
                        placeholder="Course Code"
                    />
                    <input
                        readOnly={true}
                        type="text"
                        value={courseNum}
                        className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5 w-full md:w-min focus:outline-none cursor-default"
                        placeholder="Course Number"
                    />
                    <input
                        readOnly={true}
                        type="text"
                        value={professor}
                        className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5 w-full md:w-min focus:outline-none cursor-default"
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
            </div>
            <div className="flex flex-row md:flex-col justify-evenly mt-4 md:mt-0 ml-0 md:ml-8 mr-[5%] md:mr-0">
                <div onClick={handleThumbsUpClick}>
                    <img src={thumbsUpClicked ? thumbsUpGreen : thumbsUpBlank} className="h-8 w-8 md:w-10 md:h-10 cursor-pointer" alt="thumbs-up"/>
                </div>
                <div onClick={handleThumbsDownClick}>
                    <img src={thumbsDownClicked ? thumbsDownRed : thumbsDownBlank} className="h-8 w-8 md:w-10 md:h-10 cursor-pointer" alt="thumbs-down"/>
                </div>
            </div>
        </div>
    );
  }
  
  export default StaticReview;