import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login.jsx';
import ProductDetail from './screens/ProductInfo.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import News from './screens/News.jsx';
import Home from './screens/Home.jsx';
import Shop from './screens/Shop.jsx';
import Checkout from './screens/Checkout.jsx';
import Wishlist from './screens/WishList.jsx';
import ShoppingCart from './screens/ShoppingCart.jsx';
import Register from './screens/Register.jsx';
import VerifyCode from './screens/VerifyCode.jsx';
import ResetPassword from './screens/ResetPassword.jsx';
import Recoverpassword from './screens/Recoverpassword.jsx';
import CodeMailValidation from "./screens/CodeMailValidation.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/codemail" element={<CodeMailValidation />}></Route>
        <Route path="/recover-password" element={<Recoverpassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
