import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CookiesProvider} from 'react-cookie';
import { UserProvider } from './UserContext.js';

// Header
// import Header from './components/Header.js';

// Pages
import LandingPage from './pages/LandingPage.js';
import SignupPage from './pages/SignupPage.js';
import LoginPage from './pages/LoginPage.js';
import AllCoursesUniversity from './pages/AllCoursesUniversity.js';
import AccountSettings from './pages/AccountSettings.js';


function App() {
  return (
    <CookiesProvider>
      <UserProvider>
        <BrowserRouter>
          {/* <Header/> */}
          <Routes>
            {/* <LandingPage /> */}
            <Route exact path = "/" Component={LandingPage}/>
            <Route exact path = "/home" Component={LandingPage}/>
            <Route exact path = "/signup" Component={SignupPage}/>
            <Route exact path = "/login" Component={LoginPage}/>
            <Route exact path = "/allCourses" Component={AllCoursesUniversity}/>
            <Route exact path='/accountSettings' Component={AccountSettings}/> 
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </CookiesProvider>
  );
}

export default App;
