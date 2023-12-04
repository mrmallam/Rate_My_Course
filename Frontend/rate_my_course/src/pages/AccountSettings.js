import React, { useState, useEffect } from "react";
import '../styles/AccountSettings.css';
import Header from '../components/Header';
import AccountSettingsPassword from "./AccountSettingsPassword";
import AccountSettingsMain from "./AccountSettingsAccount";
import { useCookies } from 'react-cookie';

const AccountSettings = () => {

    const [activePage, setActivePage] = useState('account');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const [cookies, setCookie] = useCookies(['mytoken']);
    const myToken = cookies['mytoken'];

    // Fetch user data on component mount
    useEffect(() => {

        fetch('http://localhost:8000/api/user/profile/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${myToken}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched user data:', data);
            setUserData(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error:', error);
            setLoading(false);
        });
    }, []);
    
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
                    {activePage === 'account' && <AccountSettingsMain userData={userData} setUserData={setUserData} />}
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;