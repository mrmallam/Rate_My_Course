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

const AccountSettingsAccount = () => {
    const initialData = {
        firstName: "John",
        lastName: "Doe",
        university: "University of Calgary",
        yearOfStudy: 3,
        email: "john_doe@ucalgary.ca",
    };

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
