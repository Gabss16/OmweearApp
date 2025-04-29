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

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/news" element={<News />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/WishList" element={<Wishlist />} />
      <Route path="/ShoppingCart" element={<ShoppingCart />} />
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;