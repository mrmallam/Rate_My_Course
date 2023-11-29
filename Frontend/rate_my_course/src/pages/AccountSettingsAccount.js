import React, { useState } from "react";
import '../styles/AccountSettingsAccount.css';
import UserAccountSettingsProfilePicture from '../resources/user_profile.png';

// Custom component for each editable field
const AccountInformation = ({ label, value, editMode, onEditClick, onSaveClick, onCancelClick, onChange, fieldType }) => (
    <div className="inputContainer">
        {label && <label>{label}</label>}
        <input
            className="inputBox" id="inputBox--accountSettingsAccount"
            type={fieldType}
            value={value}
            readOnly={!editMode}
            onChange={(e) => onChange(e.target.value)}
        />
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

    // Initial user data
    const initialData = {
        firstName: "John",
        lastName: "Doe",
        university: "University of Calgary",
        yearOfStudy: 3,
        email: "john_doe@ucalgary.ca",
    };

    // For testing purposes
    // const fieldTypes = {
    //     firstName: "text",
    //     lastName: "text",
    //     yearOfStudy: "number",
    //     university: "text",
    //     email: "email",
    // };

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

            setEditPressed(true);
        }
    };

    const handleSaveClick = (field) => {
        setEditMode((prevEditMode) => ({
            ...prevEditMode,
            [field]: false,
        }));

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
                        fieldType='text'
                        editMode={editMode.university}
                        onEditClick={() => handleEditClick("university")}
                        onSaveClick={() => handleSaveClick("university")}
                        onCancelClick={() => handleCancelClick("university")}
                        onChange={(value) => handleInputChange("university", value)}
                    />
                    <AccountInformation
                        label="Year of Study"
                        value={data.yearOfStudy.toString()}
                        fieldType="number"
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
