import React, { useState } from "react";
import '../styles/LoginPage.css';
import '../styles/AccountSettings.css';

import CustomButton from "../components/Button";


const AccountSettingsMain = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [yearOfStudy, setyearOfStudy] = useState("")
    const [university, setUniversity] = useState("")
    const [email, setEmail] = useState("")





    const [passwordError, setPasswordError] = useState("")


    return (
        <div className="mainContainer">
            <div className="textFieldContainer">     
                <div className="titleContainer">Change Password</div>


                <div className="textAndInput">
                    <label className="label">Name:</label>
                    <input
                        value={firstName}
                        placeholder="Ex. Joe"
                        onChange={ev => setFirstName(ev.target.value)}
                        className={"inputBox"} />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br />

                <div className={"textAndInput"}>Last Name
                    <input
                        value={lastName}
                        placeholder="Enter last name"
                        onChange={ev => setLastName(ev.target.value)}
                        className={"inputBox"} />
                    <label className="errorLabel">{passwordError}</label>
                </div>

                <br></br>

                <div className={"textAndInput"}>Year of Study
                    <input
                        value={yearOfStudy}
                        placeholder="Year of Study"
                        onChange={ev => setyearOfStudy(ev.target.value)}
                        className={"inputBox"} />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br></br>

                <div className={"textAndInput"}>university
                    <input
                        value={university}
                        placeholder="university"
                        onChange={ev => setUniversity(ev.target.value)}
                        className={"inputBox"} />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br></br>

                <div className={"textAndInput"}>Email
                    <input
                        value={email}
                        placeholder="Email"
                        onChange={ev => setEmail(ev.target.value)}
                        className={"inputBox"} />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br></br>
                <CustomButton label="Change Password" width={'100%'}/>
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

export default AccountSettingsMain;