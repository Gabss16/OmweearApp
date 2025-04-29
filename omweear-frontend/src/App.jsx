import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import Login from './screens/Login.jsx'
import Register from './screens/Register.jsx';
import VerifyCode from './screens/VerifyCode.jsx';
import ResetPassword from './screens/ResetPassword.jsx';
import Navbar from './components/Navbar.jsx'
import Recoverpassword from './screens/Recoverpassword.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover-password" element={<Recoverpassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  )
}

export default App;
