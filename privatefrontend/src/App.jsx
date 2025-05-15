import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import RecoverPassword from './screens/Recoverpassword.jsx';
import VerifyCode from './screens/VerifyCode.jsx';
import AddClothes from './screens/AddClothes.jsx';
import AddCategory from './screens/AddCategory.jsx';
import AddAccessory from './screens/AddAccessory.jsx';
import AddEmployee from './screens/AddEmployee.jsx';
import ResetPassword from './screens/ResetPassword.jsx';
import Profile from './screens/Profile.jsx';
import AddSuppliers from './screens/AddSuppliers.jsx';
import AddBrands from './screens/BrandsPage.jsx';
import Orders from './screens/Orders.jsx';
import Customers from './screens/Customers.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar a la izquierda */}
        <Navbar />

        {/* Contenedor para el contenido principal */}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Navigate to="/employees" />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/employees" element={<AddEmployee />} />
            <Route path="/add-brand" element={<AddBrands />} />
            <Route path="/add-category" element={<AddCategory />} />
            <Route path="/clothes" element={<AddClothes />} />
            <Route path="/accessories" element={<AddAccessory />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/suppliers" element={<AddSuppliers />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
