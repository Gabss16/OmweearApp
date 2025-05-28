import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import RecoverPassword from './screens/Recoverpassword.jsx';
import VerifyCode from './screens/VerifyCode.jsx';
import ResetPassword from './screens/ResetPassword.jsx';

import AddClothes from './screens/AddClothes.jsx';
import AddCategory from './screens/AddCategory.jsx';
import AddAccessory from './screens/AddAccessory.jsx';
import AddEmployee from './screens/AddEmployee.jsx';
import Profile from './screens/Profile.jsx';
import AddSuppliers from './screens/AddSuppliers.jsx';
import AddBrands from './screens/BrandsPage.jsx';
import Orders from './screens/Orders.jsx';
import Customers from './screens/Customers.jsx';

import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">

          <Navbar />

          <div className="content-container">
            <Routes>
              {/* Rutas públicas */}
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/recover-password" element={<RecoverPassword />} />
              <Route path="/verify-code" element={<VerifyCode />} />
              <Route path="/reset-password" element={<ResetPassword />} />

              {/* Rutas privadas */}
              <Route element={<PrivateRoute />}>
                <Route path="/employees" element={<AddEmployee />} />
                <Route path="/add-brand" element={<AddBrands />} />
                <Route path="/add-category" element={<AddCategory />} />
                <Route path="/clothes" element={<AddClothes />} />
                <Route path="/accessories" element={<AddAccessory />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/suppliers" element={<AddSuppliers />} />
                <Route path="/profile" element={<Profile />} />
              </Route>

              {/* Redirección si no se encuentra la ruta */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
