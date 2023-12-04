import React, { useState } from "react";
import '../styles/AccountSettingsAccount.css';
import UserAccountSettingsProfilePicture from '../resources/user_profile.png';

// Custom component for each editable field
const AccountInformation = ({ label, value, editMode, onEditClick, onSaveClick, onCancelClick, onChange, fieldType }) => (
    <div className="inputContainer--account">
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

const AccountSettingsAccount = ({ userData, setUserData }) => {
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
                [field]: userData[field],
            }));

            setEditMode((prevEditMode) => ({
                ...prevEditMode,
                [field]: true,
            }));

            setEditPressed(true);
        }
    };

    const handleSaveClick = async (field) => {
        setEditMode((prevEditMode) => ({
            ...prevEditMode,
            [field]: false,
        }));
        setEditPressed(false);

        // Send changes to the backend
        try {
            const response = await fetch('http://localhost:8000/api/users/update', { // Replace with your actual API endpoint
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Failed to save data to the backend.');
            }

            console.log('Data saved successfully to the backend.');
        } catch (error) {
            console.error('Error while saving data to the backend:', error);
        }
    };

    const handleCancelClick = (field) => {
        setEditMode((prevEditMode) => ({
            ...prevEditMode,
            [field]: false,
        }));

        setUserData((prevData) => ({
            ...prevData,
            [field]: tempData[field],
        }));

        setEditPressed(false);
    };

    const handleInputChange = (field, value) => {
        setUserData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };


    if (!userData) {
        // Render loading state ...
        return <div>Loading...</div>;
    }

    return (
        <div className="mainContainer--account">
            <div className="titleContainer">Account Details</div>

            <img id="accountImage" src={UserAccountSettingsProfilePicture} alt="user-profile-logo" />

            <div className="entireDiv">
                <div className="textFieldContainer" id="textFieldContainer--accountSettingsAccount">
                    <AccountInformation
                        label="User Name"
                        value={userData.username || ""}
                        fieldType='text'
                        editMode={editMode.username}
                        onEditClick={() => handleEditClick("username")}
                        onSaveClick={() => handleSaveClick("username")}
                        onCancelClick={() => handleCancelClick("username")}
                        onChange={(value) => handleInputChange("username", value)}
                    />
                    <AccountInformation
                        label="Email"
                        value={userData.email || ""}
                        fieldType='text'
                        editMode={editMode.email}
                        onEditClick={() => handleEditClick("email")}
                        onSaveClick={() => handleSaveClick("email")}
                        onCancelClick={() => handleCancelClick("email")}
                        onChange={(value) => handleInputChange("email", value)}
                    />
                    <AccountInformation
                        label="First Name"
                        value={userData.first_name || ""}
                        fieldType='text'
                        editMode={editMode.first_name}
                        onEditClick={() => handleEditClick("first_name")}
                        onSaveClick={() => handleSaveClick("first_name")}
                        onCancelClick={() => handleCancelClick("first_name")}
                        onChange={(value) => handleInputChange("first_name", value)}
                    />
                    <AccountInformation
                        label="Last Name"
                        value={userData.last_name || ""}
                        fieldType='text'
                        editMode={editMode.last_name}
                        onEditClick={() => handleEditClick("last_name")}
                        onSaveClick={() => handleSaveClick("last_name")}
                        onCancelClick={() => handleCancelClick("last_name")}
                        onChange={(value) => handleInputChange("last_name", value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default AccountSettingsAccount;



