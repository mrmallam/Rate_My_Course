import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Header
import Header from './components/Header.js';

// Pages
import LandingPage from './pages/LandingPage.js';
import SignupPage from './pages/SignupPage.js';
import LoginPage from './pages/LoginPage.js';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* <LandingPage /> */}
        <Route exact path = "/home" Component={LandingPage}/>
        <Route exact path = "/signup" Component={SignupPage}/>
        <Route exact path = "/login" Component={LoginPage}/>
        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
