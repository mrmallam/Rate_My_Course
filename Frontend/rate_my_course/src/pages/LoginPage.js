import React, {useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import rateMyCourse_white_logo from '../resources/logo-white.png';
import APIService from '../APIService';
import {useCookies} from 'react-cookie';

import '../styles/LoginPage.css';


const LoginPage = (props) => {
    const [username, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [token, setToken] = useCookies(['mytoken'])
    
    const { setIsLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();
    
    // useEffect(() => {
    //     if(token['mytoken']) {
    //         console.log("here");
    //         navigate('/home');
    //     }
    // }, [token, navigate]);

    const loginBtn = () => {
        APIService.LoginUser({username, password})
        .then(resp => {
            setToken("mytoken", resp.token);
            setIsLoggedIn(true); // Update the login state
            navigate('/home');
        })
        .catch(error => console.log(error))
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
                    value={username}
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
                    className={"inputBox"} />
                <label className="errorLabel">{passwordError}</label>
                <button className="forgotPassword">Forgot Password?</button>

            </div>
            <br />
            <button onClick = {loginBtn} className="loginButton">Login</button>
            
        </div>
    </div>
}


export default LoginPage;