import React, { useState } from "react";
import '../styles/LoginPage.css';
import '../styles/AccountSettings.css';


const AccountSettingsPassword = () => {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPassword2, setConfirmPassword2] = useState("")


    const [passwordError, setPasswordError] = useState("")


    return (
        <div className="mainContainer">
            <div className="textFieldContainer">     
                <div className="titleContainer">Change Password</div>


                <div className={"inputContainer"}>
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter Current Password"
                        onChange={ev => setPassword(ev.target.value)}
                        className={"inputBox"} />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br />

                <div className={"inputContainer"}>
                    <input
                        type="password"
                        value={confirmPassword}
                        placeholder="Enter New Password"
                        onChange={ev => setConfirmPassword(ev.target.value)}
                        className={"inputBox"} />
                    <label className="errorLabel">{passwordError}</label>
                </div>

                <br></br>

                <div className={"inputContainer"}>
                    <input
                        type="password"
                        value={confirmPassword2}
                        placeholder="Re-type New Password"
                        onChange={ev => setConfirmPassword2(ev.target.value)}
                        className={"inputBox"} />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br></br>
                <button className="loginButton" id="changePasswordButton">Change Password</button>
            </div>

            <div className="redLine"></div>
            <div className="selectionsContainer">
                <div className="selection" id="account">
                    account
                </div>
                <div className="selection" id="password">
                    password
                </div>
            </div>


        </div>
        
    )
} 

export default AccountSettingsPassword;