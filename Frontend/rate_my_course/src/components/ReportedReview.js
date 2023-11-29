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
        <div className='flex flex-row w-full py-8'>
            <div className="container">    
                <div className='staticReview-container border-2 border-red-600 shadow-lg'>
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
                <div
                    className='flex-grow py-2 px-4 border-2 border-red-600 shadow-lg my-4 mx-5 cursor-default'
                > {comments}
                </div>
                </div>
            </div>
            <div className="modifications">
                <div className="edit-button flex">
                    <button className='h-10 w-1/8 bg-green-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline hover:bg-green-900'>Approve
                    </button>
                </div>
                <div className="delete-button flex">
                    <button className='h-10 w-1/8 bg-red-600 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline hover:bg-red-900'>Remove
                    </button>                                    
                </div>
            </div>
        </div>
    );
  }
  
  export default StaticReview;