import '../styles/Reviews.css';
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

    return (
      <div className="container">    
        <div className='form-container border-2 border-red-600 shadow-lg'>
          <div className='ml-4'>
            <div className="rounded-full py-2 px-4 border-2 border-red-600 my-4 cursor-default w-1/2">
              Professor: {professor}
            </div>
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
            readOnly={true}
            className='flex-grow py-2 px-4 border-2 border-red-600 shadow-lg my-4 mx-5 cursor-default'
            placeholder='What do you want others to know about this class?'
            style= {{outline: 'none'}}
          ></textarea>
        </div>
      </div>
    );
  }
  
  export default StaticReview;