// App.js

import "../styles/App.css";
import Navbar from "./Navbar";
import ExpenseTracker from "./ExpenseTracker";
import NoUser from "./NoUser.js";
import Profile from "./profile/Profile";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react";

function App() {
    const [showSignupForm, setShowSignupForm] = useState(false);
    const userToken = JSON.parse(localStorage.getItem('expenseTrackerUserToken'));

    return (
        <Router>
            <div className="App">
                <div className="bg-violet text-white flex justify-center"></div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bg">
                    <path fill="#c465c9" d="M0,32L120,58.7C240,85,480,139,720,144C960,149,1200,107,1320,85.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
                </svg>
                <Navbar showSignupForm={showSignupForm} setShowSignupForm={setShowSignupForm} />
                <Routes>
                    <Route path="/" element={
                        userToken ?
                            <ExpenseTracker />
                            :
                            <NoUser showSignupForm={showSignupForm} setShowSignupForm={setShowSignupForm} />
                    } />
                    <Route path="/profile" element={<Profile/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
