import '../styles/Reviews.css';
import React, { useState } from 'react';

function RatingSet ({label, rating, setRating}) {
  const levels = [1,2,3,4,5];

  return (
    <div className="flex items-center space-x-2">
      {levels.map((level) => (
        <button
          key={level}
          className={`h-8 w-8 rounded-full ${rating >= level ? 'bg-red-600' : 'bg-red-200'}`}
          onClick={() => setRating(level)}
          aria-label={`Set ${label} to ${level}`}
        />
      ))}
      <span>{label}</span>
    </div>
  );
}

function Reviews() {
    const [professor, setProfessor] = useState('');
    const [difficulty, setDifficulty] = useState(5);
    const [workload, setWorkload] = useState(5);
    const [usefulness, setUsefulness] = useState(5);
    const [comments, setComments] = useState('');

    return (
      <div className="container">    
        <div className='form-container border-2 border-red-600 shadow-lg'>
          <div className='ml-4'>
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
            className='form-input flex-grow py-2 px-4 border-2 border-red-600 shadow-lg my-4 mx-5'
            placeholder='What do you want others to know about this class?'
          ></textarea>
        </div>
      </div>
    );
  }
  
  export default Reviews;