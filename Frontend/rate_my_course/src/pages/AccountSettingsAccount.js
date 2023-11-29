import React, { useState } from "react";
import '../styles/AccountSettingsAccount.css';


import UserAccountSettingsProfilePicture from '../resources/user_profile.png';



const AccountSettingsAccount = () => {

    // Initial user details
    const initialData = {
        firstName: "John",
        lastName: "Doe",
        university: "University of Calgary",
        yearOfStudy: 3,
        email: "john_doe@ucalgary.ca",
    };

    const fieldTypes = {
        firstName: "text",
        lastName: "text",
        yearOfStudy: "number",
        university: "text",
        email: "email",
    };



    const [data, setData] = useState(initialData);
    const [tempData, setTempData] = useState({}); // State to store temporary changes, used when user clicks 'cancel' button previous text will be restored
    const [isEditPressed, setEditPressed] = useState(false);  // user can only edit one field at a time, track this

    // Track whether each field is being edited 
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
            
            setEditPressed(true);
        }
    };

    const handleSaveClick = (field) => {
        setEditMode((prevEditMode) => ({
            ...prevEditMode,
            [field]: false,
        }));

        setEditPressed(false);
    };

    const handleCancelClick = (field) => {
        setEditMode((prevEditMode) => ({
            ...prevEditMode,
            [field]: false,
        }));
        // Reset the input field to its original value
        
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
            <div className="titleContainer">Account Details</div>

                <img id="accountImage" src={UserAccountSettingsProfilePicture} alt="user-profile-logo"/>
            
            
            <div className="entireDiv">
    
                <div className="textFieldContainer" id="textFieldContainer--accountSettingsAccount">
                    {Object.keys(data).map((field) => (
                        <div key={field} className="inputContainer">
                            
                            {field === 'firstName' ? <label>First Name</label>
                                : field === 'lastName' ? <label>Last Name</label>
                                : field === 'university' ? <label>University</label>
                                : field === 'yearOfStudy' ? <label>Year of Study</label>
                                : field === 'email' ? <label>Email</label>
                                : null
                            }
                            
                            <input
                                className="inputBox" id="inputBox--accountSettingsAccount"
                                value={data[field]}
                                type={fieldTypes[field]}
                                readOnly={!editMode[field]}
                                onChange={(e) => handleInputChange(field, e.target.value)}
                            />

                            <div className="editButtonsContainer">

                                {editMode[field] ? (
                                    <div className="editButtons">
                                        <button id="saveButton" onClick={() => handleSaveClick(field)}>Save</button>
                                        <button id="cancelButton" onClick={() => handleCancelClick(field)}>Cancel</button>
                                    </div>
                                ) : (
                                    <button id="editButton" onClick={() => handleEditClick(field)}>Edit</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default AccountSettingsAccount;


