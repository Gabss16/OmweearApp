import './App.css'
import Login from './screens/Login.jsx'
import Register from './screens/Register.jsx'
import VerifyCode from './screens/VerifyCode.jsx'
import ResetPassword from './screens/ResetPassword.jsx'
import Recoverpassword from './screens/Recoverpassword.jsx'

function App() {

  return (
    <>
      <Login/>
      <Register/>
      <VerifyCode/>
      <ResetPassword/>
      <Recoverpassword/>
    </>
  )
}

export default App
