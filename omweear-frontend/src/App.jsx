<<<<<<< HEAD
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login.jsx'
/*
import Register from './screens/Register.jsx'
import VerifyCode from './screens/VerifyCode.jsx'
import ResetPassword from './screens/ResetPassword.jsx'
*/
import Navbar from './components/Navbar.jsx'
import News from './screens/News.jsx';
import Home from './screens/Home.jsx';
import Checkout from './screens/Checkout.jsx';
import Wishlist from './screens/WishList.jsx';
import ShoppingCart from './screens/ShoppingCart.jsx';
=======
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import Login from './screens/Login.jsx'
import Register from './screens/Register.jsx';
import VerifyCode from './screens/VerifyCode.jsx';
import ResetPassword from './screens/ResetPassword.jsx';
import Navbar from './components/Navbar.jsx'
import Recoverpassword from './screens/Recoverpassword.jsx';
import News from './screens/News.jsx'
>>>>>>> 6e76b3d0ae9bac9cd7be7514dcb577f507aba00e

function App() {

  return (
    <Router>
      <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/news" element={<News />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/WishList" element={<Wishlist />} />
      <Route path="/ShoppingCart" element={<ShoppingCart />} />
=======
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recover-password" element={<Recoverpassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/news" element={<News />} />
>>>>>>> 6e76b3d0ae9bac9cd7be7514dcb577f507aba00e
      </Routes>
    </Router>
  )
}

export default App;