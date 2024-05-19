import React, { useContext } from 'react'
import AuthForm from './AuthForm'
import ChatPlace from './ChatPlace'
import UserContext from '../context/UserContext'
import LandingPage from './LandingPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Demo from "./Demo"

const ChatApp = () => {
    const context = useContext(UserContext);
    const {user} = context;
  return (
    <>
    <Router>
      <Routes>
        <Route path="/chat" element={!user.email?(<AuthForm/>):(<ChatPlace/>)} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </Router>
    </>
  )
}

export default ChatApp