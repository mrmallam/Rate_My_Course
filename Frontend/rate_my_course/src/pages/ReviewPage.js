import React, { useState, useEffect } from 'react';
import '../styles/Reviews.css';
import UniLogo from '../resources/logo-ucalgary.jpg'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

function RatingSet ({label, rating, setRating}) {
    const levels = [1,2,3,4,5];
  
    return (
      <div className="flex items-center space-x-2">
        {levels.map((level) => (
          <button
            key={level}
            className={`h-8 w-8 rounded-full ${rating >= level ? 'bg-red-500' : 'bg-red-200'}`}
            onClick={() => setRating(level)}
            aria-label={`Set ${label} to ${level}`}
          />
        ))}
        <span>{label}</span>
      </div>
    );
}

function Reviews() {
    const navigate = useNavigate();

    const [university, setUniversity] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [professor, setProfessor] = useState('');
    const [difficulty, setDifficulty] = useState(0);
    const [workload, setWorkload] = useState(0);
    const [usefulness, setUsefulness] = useState(0);
    const [comments, setComments] = useState('');

    const initialState = {
        university: university,
        courseCode, courseCode,
        professor: professor,
        difficulty: difficulty,
        workload: workload,
        usefulness: usefulness,
        comments: comments,
      };

      const [errorMessages, setErrorMessages] = useState({
        university: '',
        courseName: '',
        courseNum: '',
        professor: '',
        comments: ''
      });

    const validateInputs = () => {
        const errors = {};

        if(difficulty === 0)
        {
            errors.difficulty = 'Difficulty Rating is required';
        }

        if(workload === 0)
        {
            errors.workload = 'Workload Rating is required';
        }

        if(usefulness === 0)
        {
            errors.usefulness = 'Usefulness Rating is required';
        }

        if (university.trim() === '') {
          errors.university = 'University is required';
        }
    
        if (professor.trim() === '') {
          errors.professor = 'Professor\'s Name is required';
        }

        if (courseCode.trim() === '') {
            errors.professor = 'Course Code is required';
          }
        if (comments.trim() === "") {
            errors.comments = 'Comments are required';
            console.log("Comments are required");
        }
    
        setErrorMessages(errors);
    
        return Object.keys(errors).length === 0; // Return true if there are no errors
      };

      const handleSaveChanges = () => {
  
        const isValid = validateInputs();
  
        if (isValid) {
          navigate(-1);
        }
      };

    return (
        <div>
            <Header />
            <div className='class-header flex items-center'>
            <img src={UniLogo} alt="University-Logo" className="w-24"/>
            <h1 className="text-3xl">SENG 513</h1>
            </div>
            <div className="review-container">    
            <div className='form-container'>
                <div className='ml-4 mr-4'>
                    <div className='flex flex-col items-center md:items-start py-2'>
                        {errorMessages.university && <div className="text-red-500">{errorMessages.university}</div>}
                        {errorMessages.courseCode && <div className="text-red-500">{errorMessages.courseCode}</div>}
                        {errorMessages.comments && <div className="text-red-500">{errorMessages.comments}</div>}
                        {errorMessages.professor && <div className="text-red-500">{errorMessages.professor}</div>}
                        {errorMessages.difficulty && <div className="text-red-500">{errorMessages.difficulty}</div>}
                        {errorMessages.workload && <div className="text-red-500">{errorMessages.workload}</div>}
                        {errorMessages.usefulness && <div className="text-red-500">{errorMessages.usefulness}</div>}
                    </div>
                    <input
                        type="text"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5 w-full md:w-min"
                        placeholder="University"
                    />
                    <input
                        type="text"
                        value={courseCode}
                        onChange={(e) => setCourseCode(e.target.value)}
                        className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5 w-full md:w-min"
                        placeholder="Course Code"
                    />
                    <input
                        type="text"
                        value={professor}
                        onChange={(e) => setProfessor(e.target.value)}
                        className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5 w-full md:w-min"
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
            </div>
            <div className='buttons-container'>
                <button 
                className='rounded-xl h-20 w-28 bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-900 m-3'
                onClick={() => navigate(-1)}>
                    Cancel</button>
                <button 
                className='rounded-xl h-20 w-28 bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-900 m-3'
                onClick={handleSaveChanges}>
                    Submit</button>
            </div>
        </div>
    );
  }
  
  export default Reviews;