import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './screens/Login.jsx'
import Register from './screens/Register.jsx';
import VerifyCode from './screens/VerifyCode.jsx';

function App() {

  return (
    <>
      <Login/>
    </>
  )
}

export default App
