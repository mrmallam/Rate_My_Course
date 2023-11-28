import React, { useState, useEffect } from 'react';
import UniLogo from '../resources/logo-ucalgary.jpg'
import '../styles/Reviews.css';


function RatingSet ({label, rating, setRating}) {
    const levels = [1,2,3,4,5];
  
    return (
      <div className="flex items-center space-x-2">
        {levels.map((level) => (
          <button
            key={level}
            className={`h-5 w-5 sm:h-8 sm:w-8 rounded-full ${rating >= level ? 'bg-red-500' : 'bg-red-200'}`}
            onClick={() => setRating(level)}
            aria-label={`Set ${label} to ${level}`}
          />
        ))}
        <span>{label}</span>
      </div>
    );
}


export default function Review() {
    const [university, setUniversity] = useState('');
    const [courseNum, setCourseNum] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [professor, setProfessor] = useState('');
    const [difficulty, setDifficulty] = useState(5);
    const [workload, setWorkload] = useState(5);
    const [usefulness, setUsefulness] = useState(5);
    const [comments, setComments] = useState('');

  return (
    <div className="review-container">    
        <div className='form-container'>
          <div className='ml-4'>
            <input
                type="text"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5"
                placeholder="University"
              />
              <input
                type="text"
                value={courseCode}
                onChange={(e) => setCourseCode(e.target.value)}
                className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5"
                placeholder="Course Code"
              />
              <input
                type="text"
                value={courseNum}
                onChange={(e) => setCourseNum(e.target.value)}
                className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5"
                placeholder="Course Number"
              />
              <input
                type="text"
                value={professor}
                onChange={(e) => setProfessor(e.target.value)}
                className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4"
                placeholder="Professor's Name"
              />
          </div>
          <div className='my-4 pl-4'>
            <RatingSet label='Difficulty' rating={difficulty} setRating={setDifficulty} />
          </div>
          <div className='my-4 pl-4'>
            <RatingSet label='Workload' rating={workload} setRating={setWorkload} />
          </div>
          <div className='my-4 pl-4'>
            <RatingSet label='Usefulness' rating={usefulness} setRating={setUsefulness} />
          </div>
          <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className='form-input flex-grow py-2 px-4 border-2 border-red-600 my-4 mx-5 sm:min-h-[200px]'
                placeholder='What do you want others to know about this class?'
          ></textarea>
        </div>
        <div className='buttons-container'>
            <button className='rounded-xl h-20 w-28 bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-900 m-3'>
                Cancel</button>
            <button className='rounded-xl h-20 w-28 bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-900 m-3'>
                Submit</button>
        </div>
      </div>
  )
} 
