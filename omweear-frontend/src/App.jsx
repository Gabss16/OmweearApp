import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './screens/Login.jsx'
/*
import Register from './screens/Register.jsx'
import VerifyCode from './screens/VerifyCode.jsx'
import ResetPassword from './screens/ResetPassword.jsx'
import News from './screens/News.jsx';*/
import Navbar from './components/Navbar.jsx'
import News from './screens/News.jsx';
import Home from './screens/Home.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/news" element={<News />} />
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;