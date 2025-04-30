
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login.jsx'
/*
import Register from './screens/Register.jsx'
import VerifyCode from './screens/VerifyCode.jsx'
import ResetPassword from './screens/ResetPassword.jsx'
import News from './screens/News.jsx';*/
import ProductDetail from './screens/ProductInfo.jsx';
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import News from './screens/News.jsx';
import Home from './screens/Home.jsx';
import Shop from './screens/Shop.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App;