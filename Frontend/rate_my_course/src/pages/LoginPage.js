import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import rateMyCourse_white_logo from '../resources/logo-white.png';


import '../styles/LoginPage.css';


const LoginPage = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    
    const navigate = useNavigate();
        
    const onButtonClick = () => {
        // use this function later
    }

    return <div className={"mainContainer"} id="loginPageMainContainer">
        <div className="innerContainer">

        

            <img src={rateMyCourse_white_logo} className=' max-h-72' alt='logo' />
            <div className={"titleContainer"}>Login</div>

            <br />
            <div className={"inputContainer"}>
                <div className="inputContainerTitle">
                    Email: 
                </div>
                <input
                    value={email}
                    placeholder="Email address"
                    onChange={ev => setEmail(ev.target.value)}
                    className={"inputBox"} />
                <label className="errorLabel">{emailError}</label>
            </div>
            <br />

            <div className={"inputContainer"}>
                <div className="inputContainerTitle">
                    Password:
                </div>
                <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={ev => setPassword(ev.target.value)}
                    className={"inputBox"} 
                    secureTextEntry={true} 
                />   
                
                
                <label className="errorLabel">{passwordError}</label>
                <button className="forgotPassword">Forgot Password?</button>

            </div>
            <br />
            <button className="loginButton">Login</button>
            
        </div>
    </div>
}


export default LoginPage;