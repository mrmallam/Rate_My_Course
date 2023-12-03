    import React, { useState } from "react";
    import '../styles/AccountSettingsPassword.css';


    const AccountSettingsPassword = () => {

        const [oldPassword, setOldPassword] = useState("")
        const [newPassword, setConfirmPassword] = useState("")
        const [confirmNewPassword, setConfirmNewPassword] = useState("");



        // error messages
        const [oldPasswordError, setOldPasswordError] = useState("");
        const [newPasswordError, setNewPasswordError] = useState("");
        const [confirmNewPasswordError, setConfirmNewPasswordError] = useState("");

        const validateChangePassword = () => {
            let isValid = true;

            if (!oldPassword || !newPassword || !confirmNewPassword) {
                isValid = false;
                // setPasswordVisibility("changePasswordButtonInvisible");

            }
            if (!oldPassword) {
                setOldPasswordError("Current password is required");
            } else {
                setOldPasswordError("");
            }

            if (!newPassword) {
                setNewPasswordError("New password is required");
            } else {
                setNewPasswordError("");
            }

            if (!confirmNewPassword) {
                setConfirmNewPasswordError("Confirm password is required");
            }
            else {
                setConfirmNewPasswordError("");
            }

            return isValid;
        }


        const toggleChangePasswordButtonVisibility = () => {
            let changePasswordVisibility = "changePasswordButtonInvisible";

            if (confirmNewPassword && oldPassword && newPassword){
                changePasswordVisibility = "changePasswordButton";
            }

            return changePasswordVisibility;
        }
    

        const changePasswordButton = () => {


            // use backend to confirm the old password given by user is correct
            // replace "old11" with password from backend

            if (validateChangePassword()) {
                // Replace user's password in backend


                if (oldPassword === "old11") {
                    setOldPasswordError("");  // clear password error message
                

                    //if old password and both new passwords match --> success!
                    if (newPassword === confirmNewPassword) {
                        console.log("passwords match!"); // test 
                        setConfirmNewPasswordError("");
                    }
        
                    // if old password matches but new passwords don't
                    else {
                        setConfirmNewPasswordError("New passwords do not match");
                    }
                }
        
                // if old password doesn't match
                else {
                    setOldPasswordError("Incorrect old password");
                }
            }       
        }




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
                            onChange={ev => setOldPassword(ev.target.value) && validateChangePassword()}
                            className={"inputBox--accountSettingsPassword"}
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
                            onChange={ev => setConfirmPassword(ev.target.value) && validateChangePassword()}
                            className={"inputBox--accountSettingsPassword"} 
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
                            onChange={ev => setConfirmNewPassword(ev.target.value) && validateChangePassword()}
                            className={"inputBox--accountSettingsPassword"}
                            id="retypeNewPassword" />
                        <label className="errorLabel">{confirmNewPasswordError}</label>
                    </div>

                </div>
                <br></br>
                <div className="changePasswordButtonContainer">
                    <button className="changePasswordButton" onClick={() => changePasswordButton()}>Change Password</button>
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

