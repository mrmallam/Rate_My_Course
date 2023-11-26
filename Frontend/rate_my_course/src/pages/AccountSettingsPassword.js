import React, { useState } from "react";
import '../styles/AccountSettingsPassword.css';
import CustomButton from '../components/CustomButton';


const AccountSettingsPassword = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPassword2, setConfirmPassword2] = useState("")


    const [passwordError, setPasswordError] = useState("")


    return (
        <div className="mainContainer--changePassword">
            <div className="textFieldContainer">     
                <div className="titleContainer">Change Password</div>


                <div className="inputContainer--accountSettingsPassword">
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter Current Password"
                        onChange={ev => setPassword(ev.target.value)}
                        className={"inputBox"}
                        id="currentPassword" />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br />

                <div className="inputContainer--accountSettingsPassword">
                    <input
                        type="password"
                        value={confirmPassword}
                        placeholder="Enter New Password"
                        onChange={ev => setConfirmPassword(ev.target.value)}
                        className={"inputBox"} 
                        id="newPassword"/>
                    <label className="errorLabel">{passwordError}</label>
                </div>

                <br></br>

                <div className="inputContainer--accountSettingsPassword">
                    <input
                        type="password"
                        value={confirmPassword2}
                        placeholder="Re-type New Password"
                        onChange={ev => setConfirmPassword2(ev.target.value)}
                        className={"inputBox"}
                        id="retypeNewPassword" />
                    <label className="errorLabel">{passwordError}</label>
                </div>

                {/* <button className="loginButton" id="changePasswordButton">Change Password</button> */}
            </div>
            <br></br>
            {/* <CustomButton label={'Change Password'} width={'100%'}></CustomButton> */}
            <div className="changePasswordButtonContainer">
                <button id="changePasswordButton">Change Password</button>
            </div>

        </div>
        
    )
} 

export default AccountSettingsPassword;