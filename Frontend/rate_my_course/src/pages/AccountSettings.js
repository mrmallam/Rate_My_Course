import React, { useState } from "react";
import '../styles/AccountSettings.css';
import Header from '../components/Header';
import CustomButton from '../components/CustomButton';

import AccountSettingsPassword from "./AccountSettingsPassword";
import AccountSettingsMain from "./AccountSettingsAccount";


const AccountSettings = () => {

    const [activePage, setActivePage] = useState('account');


    const handleButtonClick = (page) => {
        setActivePage(page === activePage ? page : page);
    };

    return (
        <div>
            <Header />
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

                <div id="componentContainer">
                    {activePage === 'password' && <AccountSettingsPassword/>}
                    {activePage === 'account' && <AccountSettingsMain/>}
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;