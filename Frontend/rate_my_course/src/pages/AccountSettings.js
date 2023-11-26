import React, { useState } from "react";
import '../styles/AccountSettings.css';

import CustomButton from '../components/CustomButton';

import AccountSettingsPassword from "./AccountSettingsPassword";
import AccountSettingsMain from "./AccountSettingsAccount";


const AccountSettings = () => {
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")
    // const [confirmPassword2, setConfirmPassword2] = useState("")


    // const [passwordError, setPasswordError] = useState("")

    // const[showChangePasswordPage, setChangePasswordPage] = useState(false);
    // const[showAccountPage, setAccountPage] = useState(false);

    // const [activePage, setActivePage] = useState('account');

    const [activePage, setActivePage] = useState('account');


    const handleButtonClick = (page) => {
        // setActivePage(page);
        // document.getElementById(page).style.backgroundColor = "green";
        setActivePage(page === activePage ? page : page);
    };


    

    return (
        <div className="mainContainer--accountSettings">
            <div className="selectionsContainer">
                <button className={activePage === "account" ? "active" : "selection"} onClick={() => handleButtonClick('account')}>
                    Account
                </button>
                <button className={activePage === "password" ? "active" : "selection"} onClick={() => handleButtonClick('password')}>
                    Password
                </button>
            </div>
            <div id="accountSettingsDividerBar"></div>

            <div className="componentContainer">
                {activePage === 'password' && <AccountSettingsPassword/>}
                {activePage === 'account' && <AccountSettingsMain/>}
            </div>
        </div>    
    );
    
};

export default AccountSettings;