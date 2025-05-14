import { useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import RecoverPassword from './screens/Recoverpassword.jsx'
import VerifyCode from './screens/VerifyCode.jsx'
//import ResetPassword from './screens/ResetPassword.jsx';
import AddClothes from './screens/AddClothes.jsx';
import AddCategory from './screens/AddCategory.jsx';
import AddAccessory from './screens/AddAccessory.jsx';
import AddEmployee from './screens/AddEmployee.jsx';



function App() {

  return (
    
    <> 
      
      <AddClothes/>
      <AddCategory/>
      <AddAccessory/>
      <AddEmployee/>
    </>
  )
}

export default App