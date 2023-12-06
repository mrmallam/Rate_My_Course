import React, { useState } from 'react';
import '../styles/Reviews.css';
import UniLogo from '../resources/logo-ucalgary.jpg'
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import APIService from '../APIService';
import { useLocation } from 'react-router-dom';

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
    // const [token] = useCookies(['myToken'])
    const [university, setUniversity] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [professor, setProfessor] = useState('');
    const [difficulty, setDifficulty] = useState(0);
    const [workload, setWorkload] = useState(0);
    const [usefulness, setUsefulness] = useState(0);
    const [comments, setComments] = useState('');
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const courseName = queryParams.get('courseName');
    const university_name = queryParams.get('universityName');

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

        // if (university.trim() === '') {
        //   errors.university = 'University is required';
        // }
    
        if (professor.trim() === '') {
          errors.professor = 'Professor\'s Name is required';
        }

        // if (courseCode.trim() === '') {
        //     errors.professor = 'Course Code is required';
        //   }
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
          // APIService.InsertArticle({university, courseCode, professor, difficulty, workload, usefulness, comments}, token['myToken'])
          const postData ={
            course: courseName,
            university: university_name,
            workload, 
            difficulty, 
            usefulness, 
            review: comments,
            professor
          }
          // console.log('Sending POST data:', postData);
          APIService.InsertReview(postData);
        }
      };

    return (
        <div>
            <Header />
            <div className='class-header flex items-center'>
              <img src={UniLogo} alt="University-Logo" className="w-24"/>
              <h1 className="text-3xl">{courseName}</h1>
            </div>
            <div className="review-container">    
            <div className='form-container'>
                <div className='flex flex-row ml-4 mr-4'>
                    {/* <div className='flex flex-col items-center md:items-start py-2'>
                        {errorMessages.university && <div className="text-red-500">{errorMessages.university}</div>}
                        {errorMessages.courseCode && <div className="text-red-500">{errorMessages.courseCode}</div>}
                        {errorMessages.comments && <div className="text-red-500">{errorMessages.comments}</div>}
                        {errorMessages.professor && <div className="text-red-500">{errorMessages.professor}</div>}
                        {errorMessages.difficulty && <div className="text-red-500">{errorMessages.difficulty}</div>}
                        {errorMessages.workload && <div className="text-red-500">{errorMessages.workload}</div>}
                        {errorMessages.usefulness && <div className="text-red-500">{errorMessages.usefulness}</div>}
                    </div> */}

                    <div className='flex flex-col'>
                      <input
                          type="text"
                          value={university_name}
                          // onChange={(e) => setUniversity(e.target.value)}
                          className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5 w-full md:w-min"
                          placeholder="University"
                      />
                      <label className="text-red-500 flex justify-center">{errorMessages.university}</label>

                    </div>

                    <div className='flex flex-col'>
                      <input
                          type="text"
                          value={courseName}
                          // onChange={(e) => setCourseCode(e.target.value)}
                          className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5 w-full md:w-min"
                          placeholder="Course Code"
                      />
                      <label className="text-red-500 flex justify-center">{errorMessages.courseCode}</label>
                    </div>

                    <div className='flex flex-col'>
                      <input
                          type="text"
                          value={professor}
                          onChange={(e) => setProfessor(e.target.value)}
                          className="form-input rounded-full py-2 px-4 border-2 border-red-600 my-4 mr-5 w-full md:w-min"
                          placeholder="Professor's Name"
                      />
                       <label className="text-red-500 flex justify-center">{errorMessages.professor}</label>

                    </div>

                </div>
                <div className='my-4 pl-4'>
                    <RatingSet label='Difficulty' rating={difficulty} setRating={setDifficulty} />
                    <label className="text-red-500">{errorMessages.difficulty}</label>
                </div>
                <div className='my-4 pl-4'>
                    <RatingSet label='Workload' rating={workload} setRating={setWorkload} />
                    <label className="text-red-500">{errorMessages.workload}</label>

                </div>
                <div className='my-4 pl-4'>
                    <RatingSet label='Usefulness' rating={usefulness} setRating={setUsefulness} />
                    <label className="text-red-500">{errorMessages.usefulness}</label>

                </div>

                <div className='flex flex-col'>
                  {errorMessages.comments && <label className="text-red-500 w-full flex justify-center">{errorMessages.comments}</label>}
                  <textarea
                          value={comments}
                          onChange={(e) => setComments(e.target.value)}
                          className='form-input flex-grow py-2 px-4 border-2 border-red-600 my-4 mx-5 sm:min-h-[200px]'
                          placeholder='What do you want others to know about this class?'
                  ></textarea>
                </div>


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