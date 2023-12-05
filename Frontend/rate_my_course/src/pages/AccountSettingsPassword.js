import React, { useState } from "react";
import '../styles/AccountSettingsPassword.css';
import { useCookies } from 'react-cookie';

const AccountSettingsPassword = () => {

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setConfirmPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")

    const [cookies, setCookie] = useCookies(['mytoken']);
    const myToken = cookies['mytoken'];

    // error messages
    const [oldPasswordError, setOldPasswordError] = useState("");
    const [newPasswordError, setNewPasswordError] = useState("");
    const [confirmNewPasswordError, setConfirmNewPasswordError] = useState("");
  
    // Validate form
    const handlePasswordChange = async () => {
        // Reset error messages
        setOldPasswordError("");
        setNewPasswordError("");
        setConfirmNewPasswordError("");
    
        // Validate new passwords match
        if (newPassword !== confirmNewPassword) {
            setConfirmNewPasswordError("New passwords do not match");
            return;
        }
    
        // Validate form
        try {
            const response = await fetch('http://localhost:8000/api/change-password/', { // Replace with your actual API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${myToken}` // Replace with actual token
                },
                body: JSON.stringify({
                    old_password: oldPassword,
                    new_password: newPassword
                }),
            });
    
            if (!response.ok) {
                const data = await response.json();
                if (data.old_password) {
                    // Handle old password error
                    setOldPasswordError("Incorrect old password");
                } else {
                    // Handle other errors
                    throw new Error('Failed to change password');
                }
            } else {
                console.log("Password changed successfully");
                // Optionally, clear the form or navigate the user away
            }
        } catch (error) {
            console.error('Error while changing password:', error);
        }
    };
    

    return (
        <div className="mainContainer--changePassword">
            <div className="textFieldContainer">     
                <div className="titleContainer">Change Password</div>


                <div className="inputContainer--accountSettingsPassword">
                    <label className="top-label">Enter Current Password</label>

                    <input
                        type="password"
                        value={oldPassword}
                        placeholder="Enter Current Password"
                        onChange={ev => setOldPassword(ev.target.value)}
                        className={"inputBox"}
                        id="currentPassword" />
                    <label className="errorLabel">{oldPasswordError}</label>
                </div>
                <br />

                <div className="inputContainer--accountSettingsPassword">
                    <label className="top-label">Enter New Password</label>

                    <input
                        type="password"
                        value={newPassword}
                        placeholder="Enter New Password"
                        onChange={ev => setConfirmPassword(ev.target.value)}
                        className={"inputBox"} 
                        id="newPassword"/>
                    <label className="errorLabel">{newPasswordError}</label>
                </div>

                <br></br>

                <div className="inputContainer--accountSettingsPassword">
                    <label className="top-label">Confirm New Password</label>

                    <input
                        type="password"
                        value={confirmNewPassword}
                        placeholder="Re-type New Password"
                        onChange={ev => setConfirmNewPassword(ev.target.value)}
                        className={"inputBox"}
                        id="retypeNewPassword" />
                    <label className="errorLabel">{confirmNewPasswordError}</label>
                </div>

            </div>
            <br></br>
            <div className="changePasswordButtonContainer">
                <button id="changePasswordButton" onClick={() => handlePasswordChange(oldPassword)}>Change Password</button>
            </div>

        </div>
        
    )
} 

export default AccountSettingsPassword;


// InputField.js

// YourFormComponent.js

// import React from 'react';
// import InputField from './InputField';

// const AccountSettingsPassword = () => {
//   return (
//     <div>
//       <InputField label="Name" type="text" />
//       <InputField label="Email" type="email" />
//     </div>
//   );
// };

// export default AccountSettingsPassword;

