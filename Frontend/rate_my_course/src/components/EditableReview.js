import UniLogo from '../resources/logo-ucalgary.jpg'
import '../styles/Reviews.css';
import editImage from '../resources/edit.svg';
import deleteImage from '../resources/delete.svg';

import React, { useState } from 'react';


function RatingSet ({label, rating, setRating, editable}) {
  const levels = [1,2,3,4,5];

  return (
    <div className="flex items-center space-x-2">
      {levels.map((level) => (
        <button
          key={level}
          className={`h-8 w-8 rounded-full ${
            (rating >= level && editable) ? 'bg-red-600' :
            (rating <= level && editable) ? 'bg-red-200' :
            (rating >= level && !editable) ? 'bg-gray-600' :
            'bg-gray-400' // default background color if not editable or other conditions are not met
          } ${editable ? 'cursor-pointer' : 'cursor-default'}`}
          onClick={() => (editable ? setRating(level) : null)}
          aria-label={`Set ${label} to ${level}`}
        />
      ))}
      <span>{label}</span>
    </div>
  );
}

function EditableReview({id, onDelete}) {
    const [university, setUniversity] = useState('University of Calgary');
    const [courseNum, setCourseNum] = useState('513');
    const [courseName, setCourseName] = useState('SENG');
    const [professor, setProfessor] = useState('Professor');
    const [difficulty, setDifficulty] = useState(3);
    const [workload, setWorkload] = useState(4);
    const [usefulness, setUsefulness] = useState(5);
    const [comments, setComments] = useState('This course was very useful!');
    const [editable, setEditable] = useState(false);

    const initialState = {
      university: university,
      courseNum: courseNum,
      courseName: courseName,
      professor: professor,
      difficulty: difficulty,
      workload: workload,
      usefulness: usefulness,
      comments: comments,
    };
    const [originalState, setOriginalState] = useState(initialState);
    const [currentState, setCurrentState] = useState({ ...initialState });

    const [errorMessages, setErrorMessages] = useState({
      university: '',
      courseName: '',
      courseNum: '',
      professor: '',
      comments: '',
    });

    const [saveAttempted, setSaveAttempted] = useState(false);

    const handleEditClick = () => {
        setEditable(!editable);
    };
    const handleDeleteClick = () => {
      const confirmed = window.confirm("Are you sure you want to delete this review?");
      if (confirmed) {
        onDelete(id);
      }
    };
    const handleUniversityChange = (e) => {
        setUniversity(e.target.value);
        setCurrentState((prevState) => ({
          ...prevState,
          university: e.target.value,
        }));
    };

    const handleCourseNumChange = (e) => {
        setCourseNum(e.target.value);
        setCurrentState((prevState) => ({
          ...prevState,
          courseNum: e.target.value,
        }));
    };

    const handleCourseNameChange = (e) => {
        setCourseName(e.target.value);
        setCurrentState((prevState) => ({
          ...prevState,
          courseName: e.target.value,
        }));
    };

    const handleProfessorChange = (e) => {
        setProfessor(e.target.value);
        setCurrentState((prevState) => ({
          ...prevState,
          professor: e.target.value,
        }));
    };
    const handleCommentsChange = (e) => {
        setComments(e.target.value);
        setCurrentState((prevState) => ({
          ...prevState,
          comments: e.target.value,
        }));
    };

    const handleDifficultyChange = (value) => {
      setDifficulty(value);
      setCurrentState((prevState) => ({
        ...prevState,
        difficulty: value,
      }));
    };
    
    const handleWorkloadChange = (value) => {
      setWorkload(value);
      setCurrentState((prevState) => ({
        ...prevState,
        workload: value,
      }));
    };
    
    const handleUsefulnessChange = (value) => {
      setUsefulness(value);
      setCurrentState((prevState) => ({
        ...prevState,
        usefulness: value,
      }));
    };

    const validateInputs = () => {
      const errors = {};
  
      if (university.trim() === '') {
        errors.university = 'University is required';
      }
  
      if (courseName.trim() === '') {
        errors.courseName = 'Course Code is required';
      }
  
      if (courseNum.trim() === '') {
        errors.courseNum = 'Course Number is required';
      }
  
      if (professor.trim() === '') {
        errors.professor = 'Professor\'s Name is required';
      }
  
      if (comments.trim() === '') {
        errors.comments = 'Comments are required';
      }
  
      setErrorMessages(errors);
  
      return Object.keys(errors).length === 0; // Return true if there are no errors
    };

    // implement with backend
    const handleSaveChanges = () => {
      setSaveAttempted(true);

      const isValid = validateInputs();

      if (isValid) {
        // Save changes
        setEditable(false);
        setOriginalState({ ...currentState });
      }
    };
    
    // implement with backend
    const handleDiscardChanges = () => {
      setEditable(false);
      setCurrentState({ ...originalState });
      setSaveAttempted(false);
      setErrorMessages({
        university: '',
        courseName: '',
        courseNum: '',
        professor: '',
        comments: '',
      });
      setUniversity(originalState.university);
      setCourseNum(originalState.courseNum);
      setCourseName(originalState.courseName);
      setProfessor(originalState.professor);
      setDifficulty(originalState.difficulty);
      setWorkload(originalState.workload);
      setUsefulness(originalState.usefulness);
      setComments(originalState.comments);
    };

    return (
      <div className='flex flex-col md:flex-row w-full'>   
        <div className='form-container-3 w-[93%]'>
          <div className='ml-4 mr-4 flex flex-col md:flex-row justify-around'>
            <div className='flex flex-row items-center md:items-start py-2'>
            {/* {saveAttempted && errorMessages.university && <div className="text-red-500">{errorMessages.university}</div>}
            {saveAttempted && errorMessages.courseName && <div className="text-red-500">{errorMessages.courseName}</div>}
            {saveAttempted && errorMessages.courseNum && <div className="text-red-500">{errorMessages.courseNum}</div>}
            {saveAttempted && errorMessages.professor && <div className="text-red-500">{errorMessages.professor}</div>}
            {saveAttempted && errorMessages.comments && <div className="text-red-500">{errorMessages.comments}</div>} */}
            </div>

            <div className='flex flex-col'>
              <input
                readOnly={!editable}
                type="text"
                value={university}
                onChange={handleUniversityChange}
                className={`form-input rounded-full py-2 px-4 border-2 my-4  w-full md:w-min ${editable ? 'border-red-600 cursor-text' : 'border-black cursor-default'}`}
                placeholder="University"
              />
              {saveAttempted && errorMessages.university && <label className="text-red-500 flex justify-center">{errorMessages.university}</label>}
            </div>

            <div className='flex flex-col'>
              <input
                readOnly={!editable}
                type="text"
                value={courseName}
                onChange={handleCourseNameChange}
                className={`form-input rounded-full py-2 px-4 border-2 my-4 w-full md:w-min ${editable ? 'border-red-600 cursor-text' : 'border-black cursor-default'}`}
                placeholder="Course Code"
              />
              {saveAttempted && errorMessages.courseName && <div className="text-red-500 flex justify-center">{errorMessages.courseName}</div>}
            </div>

            <div className='flex flex-col'>
              <input
                readOnly={!editable}
                type="text"
                value={professor}
                onChange={handleProfessorChange}
                className={`form-input rounded-full py-2 px-4 border-2 my-4 w-full md:w-min ${editable ? 'border-red-600 cursor-text' : 'border-black cursor-default'}`}
                placeholder="Professor's Name"
              />
              {saveAttempted && errorMessages.professor && <div className="text-red-500 flex justify-center">{errorMessages.professor}</div>}
            </div>
            </div>
            <div className='my-4 pl-4'>
              <RatingSet label='Difficulty' rating={difficulty} setRating={handleDifficultyChange} editable={editable}/>
            </div>
            <div className='my-4 pl-4'>
              <RatingSet label='Workload' rating={workload} setRating={handleWorkloadChange} editable={editable} />
            </div>
            <div className='my-4 pl-4'>
              <RatingSet label='Usefulness' rating={usefulness} setRating={handleUsefulnessChange} editable={editable}/>
            </div>
          <textarea 
              readOnly={!editable}
              value={comments}
              onChange={handleCommentsChange}
              className={`form-input flex-grow py-2 px-4 border-2  my-4 mx-5 ${editable ? 'border-red-600 cursor-text' : 'border-black cursor-default'}`} 
              style={{ backgroundColor: editable ? 'white' : '#EEEDED' } }
          />
        </div>
        <div className="flex flex-row md:flex-col justify-evenly mt-4 md:mt-0 md:ml-8 mr-[5%] md:mr-0">
          {editable ? (
            <>
              <div className="save-button cursor-pointer text-4xl md:text-2xl lg:text-4xl" onClick={handleSaveChanges}>
                ✔
              </div>
              <div className="discard-button cursor-pointer text-4xl md:text-2xl lg:text-4xl" onClick={handleDiscardChanges}>
                X
              </div>
            </>
          ) : (
            <>
              <div className="edit-button cursor-pointer md:hover:scale-125 transition ease-in-out delay-0" onClick={handleEditClick}>
                <img src={editImage} className=" h-10 w-10 md:w-12 md:h-12" alt="edit-image" />
              </div>
              <div className="delete-button cursor-pointer md:hover:scale-125 transition ease-in-out delay-0" onClick={handleDeleteClick}>
                  <img src = {deleteImage} className="h-10 w-10 md:w-12 md:h-12" alt="delete-image"/>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  export default EditableReview;