import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import rateMyCourse_white_logo from '../resources/logo-white.png';
import APIService from "../APIService";
import { UserContext } from "../UserContext";

import '../styles/LoginPage.css';

const SignupPage = (props) => {
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const { setIsLoggedIn } = useContext(UserContext);

    const navigate = useNavigate();

    const RegisterUser = () => {
        if (password !== confirmPassword) {
            setPasswordError("Passwords do not match.");
            return; // Stop the function if passwords do not match
        }

        // Reset the password error if passwords match
        setPasswordError("");

        APIService.RegisterUser({username, password})
            .then(resp => {
                console.log(resp);
                navigate('/home');
                setIsLoggedIn(true); // Update the login state
            })
            .catch(error => console.log(error));
    }

    return (
        <div className={"mainContainer"} id="signupPageMainContainer">
            <div className="innerContainer">
                <img src={rateMyCourse_white_logo} className='max-h-72' alt='logo' />
                <div className={"titleContainer"}>Signup</div>

                {/* Email input */}
                <div className={"inputContainer"}>
                    <div className="inputContainerTitle">
                        Email:
                    </div>
                    <input
                        value={username}
                        placeholder="Email address"
                        onChange={ev => setEmail(ev.target.value)}
                        className={"inputBox"} />
                    <label className="text-red-600 ml-1">{emailError}</label>
                </div>
                <br />

                {/* Password input */}
                <div className={"inputContainer"}>
                    <div className="inputContainerTitle">
                        Password:
                    </div>
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={ev => setPassword(ev.target.value)}
                        className={"inputBox"} />
                    <label className="text-red-600 ml-1">{passwordError}</label>
                </div>
                <br />

                {/* Confirm Password input */}
                <div className={"inputContainer"}>
                    <div className="inputContainerTitle">
                        Confirm Password:
                    </div>
                    <input
                        type="password"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        onChange={ev => setConfirmPassword(ev.target.value)}
                        className={"inputBox"} />
                    <label className="text-red-600 ml-1">{passwordError}</label>
                </div>
                <br />

                {/* Signup button */}
                <button className="loginButton" onClick={RegisterUser}>Signup</button>
            </div>
        </div>
    );
}

export default SignupPage;
