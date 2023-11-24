import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Header
import Header from './components/Header.js';

// Pages
import LandingPage from './pages/LandingPage.js';
import SignupPage from './pages/SignupPage.js';
import LoginPage from './pages/LoginPage.js';
import AccountSettingsPassword from './pages/AccountSettingsPassword.js';
import AccountSettingsMain from './pages/AccountSettingsMain.js';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* <LandingPage /> */}
        <Route exact path = "/home" Component={LandingPage}/>
        <Route exact path = "/signup" Component={SignupPage}/>
        <Route exact path = "/login" Component={LoginPage}/>
        <Route exact path = "/AccountSettings/Main" Component={AccountSettingsPassword }/>
        <Route path = "/AccountSettings/Main/Password" Component={AccountSettingsMain}/>
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
