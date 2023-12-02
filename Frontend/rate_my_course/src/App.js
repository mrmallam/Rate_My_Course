import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CookiesProvider} from 'react-cookie';
import { UserProvider } from './UserContext.js';

// Pages
import LandingPage from './pages/LandingPage.js';
import SignupPage from './pages/SignupPage.js';
import LoginPage from './pages/LoginPage.js';
import MyProfile from './pages/MyProfle.js';
import AdminPage from './pages/AdminPage.js';
import ReviewPage from './pages/ReviewPage.js';
import UniversityPage from './pages/UniversityPage.js';
import OverallCourseReviews from './pages/OverallCourseReviews.js';
import AccountSettings from './pages/AccountSettings.js';

function App() {
  return (
    <CookiesProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>

            <Route exact path = "/" Component={LandingPage}/>
            <Route exact path = "/signup" Component={SignupPage}/>
            <Route exact path = "/login" Component={LoginPage}/>
            <Route exact path = "/AccountSettings" Component={AccountSettings}/>
            <Route exact path = "/MyProfile" Component={MyProfile}/>

            <Route exact path = "/home" Component={LandingPage}/>
            <Route exact path = "/UniversityPage" Component={UniversityPage}/>
            <Route exact path = "/overallCourseReview" Component={OverallCourseReviews}/>
            <Route exact path = "/review" Component={ReviewPage}/>
            
            <Route exact path = "/AdminPage" Component={AdminPage}/>

          </Routes>
        </BrowserRouter>
      </UserProvider>
    </CookiesProvider>
  );
}

export default App;
