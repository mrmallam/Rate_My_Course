import React, { useState } from "react";
import '../styles/LoginPage.css';
import '../styles/AccountSettingsPassword.css';
import CustomButton from '../components/CustomButton';


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
                    <br></br>
                    <CustomButton label={'Change Password'} width={'100%'}></CustomButton>
                </div>
                <br></br>
                {/* <button className="loginButton" id="changePasswordButton">Change Password</button> */}
            </div>

            <div className="redLine"></div>
            <div className="selectionsContainer">
                <div className="selection" id="account">
                    Account
                </div>
                <div className="selection" id="password">
                    Password
                </div>
            </div>


        </div>
        
    )
} 

export default AccountSettingsPassword;