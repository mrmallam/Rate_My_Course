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
import MyProfile from './pages/MyProfle.js';

import AdminPage from './pages/AdminPage.js';

import ReviewPage from './pages/ReviewPage.js';
import SearchResultsPage from './pages/SearchResultsPage.js';
import AllCoursesUniversity from './pages/AllCoursesUniversity.js';
import OverallCourseReviews from './pages/OverallCourseReviews.js';


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
        <Route exact path = "/MyProfile" Component={MyProfile}/>

        <Route exact path = "/AdminPage" Component={AdminPage}/>
        
        <Route exact path = "/review" Component={ReviewPage}/>
        <Route exact path = "/results" Component={SearchResultsPage}/>
        <Route exact path = "/allCourses" Component={AllCoursesUniversity}/>
        <Route exact path = "/overallCourseReview" Component={OverallCourseReviews}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
