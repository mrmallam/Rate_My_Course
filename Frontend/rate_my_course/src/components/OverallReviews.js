import '../styles/Reviews.css';
import React, { useState, useEffect } from 'react';
import Date from './Date';

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

function OverarallReviews({data, index}) {

    const [professor, setProfessor] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [workload, setWorkload] = useState("");
    const [usefulness, setUsefulness] = useState("");
    const [description, setDescription] = useState("");
    const [university, setUniversity] = useState("");
    const [course, setCourse] = useState("");

    useEffect(() => {
        if(data) {
            setUniversity(data.university);
            setCourse(data.course);
            setDescription(data.description);
            setDifficulty(data.difficulty);
            setWorkload(data.workload);
            setUsefulness(data.usefulness);
            setProfessor(data.professor);
        }
    }, [data]);

    return (
        <div>
            <div className='mt-6 bg-red-600 border-2 border-red-600 font-bold shadow-lg py-2 px-2 w-1/2 md:w-1/6'>
                <span className="text-md text-white text-center">Review #{index + 1}</span>
            </div>

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
                        {/* <input
                            readOnly={true}
                            type="text"
                            value={courseCode}
                            className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5 focus:outline-none cursor-default"
                            placeholder="Course Code"
                        /> */}
                        <input
                            readOnly={true}
                            type="text"
                            value={course}
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
                    {description}
                </div>
            </div>

            <Date></Date>
            </div>
            
        </div>
    );
  }
  
  export default OverarallReviews;


