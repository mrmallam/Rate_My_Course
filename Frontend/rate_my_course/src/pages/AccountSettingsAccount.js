import React, { useState } from "react";
import { useRef, useEffect } from 'react';

import '../styles/AccountSettingsAccount.css';
import UserAccountSettingsProfilePicture from '../resources/user_profile.svg';

// Custom component for each editable field
const AccountInformation = ({ label, value, editMode, onEditClick, onSaveClick, onCancelClick, onChange, fieldType, options}) => {

    const inputRef = useRef(null);

    // Focus on the input field when entering edit mode
    // Sets cursor in the input field when "Edit" is clicked
    useEffect(() => {
        if (editMode) {
            inputRef.current.focus();
        }
    }, [editMode]);


    return (
        <div className="inputContainer--account">
            {label && <label>{label}</label>}

            {/* If its an dropdown field */}
            {fieldType === 'dropdown' && editMode ? (


                <select
                    ref={inputRef}
                    className={`inputBox--accountSettingsAccount ${editMode ? 'editMode' : ''}`}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>


                

            ) : (

                <input
                    ref={inputRef}  // focuses cursor to the current input box
                    className={`inputBox--accountSettingsAccount ${editMode ? 'editMode' : ''}`} // Apply editMode class conditionally
                    type={fieldType}
                    value={value}
                    readOnly={!editMode}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
            <div className="editButtonsContainer">
                {editMode ? (
                    <div className="editButtons">
                        <button id="saveButton" onClick={onSaveClick}>Save</button>
                        <button id="cancelButton" onClick={onCancelClick}>Cancel</button>
                    </div>
                ) : (
                    <button id="editButton" onClick={onEditClick}>Edit</button>

                )}
            </div>
        </div>
    );
};


// ****This is for backend (finish this) ****
const saveDataToBackend = async (data) => {
    // Replace this with your actual backend API call or function
    try {
        // Assuming there's a function to send data to the backend
        // For example, using fetch or axios
        const response = await fetch('your-backend-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('Data saved successfully to the backend.');
        } else {
            console.error('Failed to save data to the backend.');
        }
    } catch (error) {
        console.error('Error while saving data to the backend:', error);
    }
};

const AccountSettingsAccount = () => {

    // Initial user data (replace with user data from backend)
    const initialData = {
        firstName: "John",
        lastName: "Doe",
        university: "University of Calgary",
        program: "Bachelor of Science",
        yearOfStudy: 3,
        email: "john_doe@ucalgary.ca",
    };

    const yearOfStudyOptions = ['1', '2', '3', '4', '5+'];

    // List of Universities (replace with backend data)
    const universityOptions = [initialData.university, 'University of Alberta', 'University of Toronto', 'University of Waterloo']; 

    const programOptions = ['Bachelor of Science', 'Bachelor of Engineering', 'Bachelor of Arts'];

    // For testing purposes
    // const fieldTypes = {
    //     firstName: "text",
    //     lastName: "text",
    //     yearOfStudy: "number",
    //     university: "text",
    //     email: "email",
    // };

    // const [showOptions, setShowOptions] = useState({
    //     yearOfStudy: false,
    //     university: false,
    // });




    const [data, setData] = useState(initialData);
    const [tempData, setTempData] = useState({});
    const [isEditPressed, setEditPressed] = useState(false);

    // for when editing fields
    const [editMode, setEditMode] = useState({
        firstName: false,
        lastName: false,
        yearOfStudy: false,
        university: false,
        email: false,
    });


    const handleEditClick = (field) => {
        if (!isEditPressed) {
            setTempData((prevTempData) => ({
                ...prevTempData,
                [field]: data[field],
            }));

            setEditMode((prevEditMode) => ({
                ...prevEditMode,
                [field]: true,
            }));


            // setShowOptions((prevShowOptions) => ({
            //     ...prevShowOptions,
            //     [field]: true, // Show dropdown options when entering edit mode
            // }));


            setEditPressed(true);
        }
    };

    const handleSaveClick = (field) => {
        setEditMode((prevEditMode) => ({
            ...prevEditMode,
            [field]: false,
        }));

        // setShowOptions((prevShowOptions) => ({
        //     ...prevShowOptions,
        //     [field]: false, // Hide dropdown options when saving
        // }));


        // user cannot edit other fields once a field is in edit mode
        setEditPressed(false);

        // *********Send changes to the backend ********
        // await saveDataToBackend(data);
    };

    const handleCancelClick = (field) => {
        setEditMode((prevEditMode) => ({
            ...prevEditMode,
            [field]: false,
        }));

        // setShowOptions((prevShowOptions) => ({
        //     ...prevShowOptions,
        //     [field]: false, // Hide dropdown options when canceling
        // }));

        setData((prevData) => ({
            ...prevData,
            [field]: tempData[field],
        }));


        setEditPressed(false);
    };

    const handleInputChange = (field, value) => {
        setData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    return (
        <div className="mainContainer--account">
            <div className="accountSettingsTitle">Account Details</div>

            <img id="accountImage" src={UserAccountSettingsProfilePicture} alt="user-profile-logo" />

            <div className="entireDiv">
                <div className="textFieldContainer" id="textFieldContainer--accountSettingsAccount">
                    <AccountInformation
                        label="First Name"
                        value={data.firstName}
                        fieldType='text'
                        editMode={editMode.firstName}
                        onEditClick={() => handleEditClick("firstName")}
                        onSaveClick={() => handleSaveClick("firstName")}
                        onCancelClick={() => handleCancelClick("firstName")}
                        onChange={(value) => handleInputChange("firstName", value)}
                    />
                    <AccountInformation
                        label="Last Name"
                        value={data.lastName}
                        fieldType='text'
                        editMode={editMode.lastName}
                        onEditClick={() => handleEditClick("lastName")}
                        onSaveClick={() => handleSaveClick("lastName")}
                        onCancelClick={() => handleCancelClick("lastName")}
                        onChange={(value) => handleInputChange("lastName", value)}
                    />
                    <AccountInformation
                        label="University"
                        value={data.university}
                        fieldType="dropdown"
                        options={universityOptions}
                        editMode={editMode.university}

                        onEditClick={() => handleEditClick("university")}
                        onSaveClick={() => handleSaveClick("university")}
                        onCancelClick={() => handleCancelClick("university")}
                        onChange={(value) => handleInputChange("university", value)}
                    />

                    <AccountInformation
                        label="Program"
                        value={data.program}
                        fieldType="dropdown"
                        options={programOptions}
                        editMode={editMode.program}

                        onEditClick={() => handleEditClick("program")}
                        onSaveClick={() => handleSaveClick("program")}
                        onCancelClick={() => handleCancelClick("program")}
                        onChange={(value) => handleInputChange("program", value)}
                    />

                    <AccountInformation
                        label="Year"
                        value={data.yearOfStudy}
                        fieldType="dropdown"
                        options={yearOfStudyOptions}
                        editMode={editMode.yearOfStudy}

                        onEditClick={() => handleEditClick("yearOfStudy")}
                        onSaveClick={() => handleSaveClick("yearOfStudy")}
                        onCancelClick={() => handleCancelClick("yearOfStudy")}
                        onChange={(value) => handleInputChange("yearOfStudy", value)}
                    />

                    <AccountInformation
                        label="Email"
                        value={data.email}
                        fieldType='email'
                        editMode={editMode.email}
                        onEditClick={() => handleEditClick("email")}
                        onSaveClick={() => handleSaveClick("email")}
                        onCancelClick={() => handleCancelClick("email")}
                        onChange={(value) => handleInputChange("email", value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default AccountSettingsAccount;
