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

function EditableReview() {
    const [university, setUniversity] = useState('University of Calgary');
    const [courseNum, setCourseNum] = useState('513');
    const [courseName, setCourseName] = useState('SENG');
    const [professor, setProfessor] = useState('Professor');
    const [difficulty, setDifficulty] = useState(3);
    const [workload, setWorkload] = useState(4);
    const [usefulness, setUsefulness] = useState(5);
    const [comments, setComments] = useState('This course was very useful!');
    const [editable, setEditable] = useState(false);
    const handleEditClick = () => {
        setEditable(!editable);
    };
    const handleDeleteClick = () => {
        // implement with backend
    };
    const handleUniversityChange = (e) => {
        setUniversity(e.target.value);
    };

    const handleCourseNumChange = (e) => {
        setCourseNum(e.target.value);
    };

    const handleCourseNameChange = (e) => {
        setCourseName(e.target.value);
    };

    const handleProfessorChange = (e) => {
        setProfessor(e.target.value);
    };
    const handleCommentsChange = (e) => {
        setComments(e.target.value);
    };

    // implement with backend
    const handleSaveChanges = () => {
      setEditable(false);
    };
    
    // implement with backend
    const handleDiscardChanges = () => {
      setEditable(false);
    };

    return (
    <div className='flex flex-col md:flex-row w-full '>
      <div className="review-container border-2 border-red-600 w-full flex flex-col items-center justify-center relative">    
        <div className='class-header flex items-center'>
          <img src={UniLogo} alt="University-Logo" className="w-24"/>
          <h1 className="text-3xl">SENG 513</h1>
        </div>
        <div className='form-container'>
          <div className='ml-4'>
          <div className={`form-input py-2 px-4 border-2 my-4 mr-5 cursor-default ${editable ? 'border-red-600 cursor-text' : 'border-black cursor-default'}` }
              style={{ backgroundColor: editable ? 'white' : '#EEEDED' }}>
            University: {editable ? (
              <input
                type="text"
                value={university}
                onChange={handleUniversityChange}
              />
            ) : (
              university
            )}
          </div>
          <div className={`form-input py-2 px-4 border-2 my-4 mr-5 cursor-default ${editable ? 'border-red-600 cursor-text' : 'border-black cursor-default'}` }
          style={{ backgroundColor: editable ? 'white' : '#EEEDED' }}>
            Course Name: {editable ? (
              <input
                type="text"
                value={courseName}
                onChange={handleCourseNameChange}
              />
            ) : (
              courseName
            )}
          </div>
          <div className={`form-input py-2 px-4 border-2 my-4 mr-5 cursor-default ${editable ? 'border-red-600 cursor-text' : 'border-black cursor-default'}` }
           style={{ backgroundColor: editable ? 'white' : '#EEEDED' }}>
            Course Number: {editable ? (
              <input
                type="text"
                value={courseNum}
                onChange={handleCourseNumChange}
              />
            ) : (
              courseNum
            )}
          </div>
          <div className={`form-input py-2 px-4 border-2 my-4 mr-5 cursor-default ${editable ? 'border-red-600 cursor-text' : 'border-black cursor-default'}` }
          style={{ backgroundColor: editable ? 'white' : '#EEEDED' }}>
            Professor: {editable ? (
              <input
                type="text"
                value={professor}
                onChange={handleProfessorChange}
              />
            ) : (
              professor
            )}
          </div>
          </div>
          <div className='my-4 pl-4'>
            <RatingSet label='Difficulty' rating={difficulty} setRating={setDifficulty} editable={editable}/>
          </div>
          <div className='my-4 pl-4'>
            <RatingSet label='Workload' rating={workload} setRating={setWorkload} editable={editable} />
          </div>
          <div className='my-4 pl-4'>
            <RatingSet label='Usefulness' rating={usefulness} setRating={setUsefulness} editable={editable}/>
          </div>
        <textarea 
            readOnly={!editable}
            value={comments}
            onChange={handleCommentsChange}
            className={`form-input flex-grow py-2 px-4 border-2  my-4 mx-5 ${editable ? 'border-red-600 cursor-text' : 'border-black cursor-default'}`} 
            style={{ backgroundColor: editable ? 'white' : '#EEEDED' } }
        />
        </div>
        </div>
        <div className="flex flex-row md:flex-col justify-evenly mt-4 md:mt-0 ml-2">
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
            <div className="edit-button cursor-pointer" onClick={handleEditClick}>
              <img src={editImage} className=" h-10 w-10 md:w-12 md:h-12" alt="edit-image" />
            </div>
            <div className="delete-button cursor-pointer" onClick={handleDeleteClick}>
                <img src = {deleteImage} className="h-10 w-10 md:w-12 md:h-12" alt="delete-image"/>
            </div>
          </>
        )}
      </div>
    </div>
    );
  }

  export default EditableReview;