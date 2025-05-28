import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

import "../styles/Navbar.css";

import {
  FaUser, FaUsers, FaPlus, FaTshirt, FaThList,
  FaTruck, FaUserFriends, FaGift, FaCreditCard, FaSignOutAlt
} from 'react-icons/fa';

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showBrands, setShowBrands] = useState(false);

  const { logOut, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (logOut()) {
      navigate("/");
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <h2>OmWeear</h2>
        <p>Management system</p>
      </div>

      <div className="nav-section">
        <h4>Settings</h4>
        <ul>
          <li><Link to="/profile"><FaUser /> Profile</Link></li>
          <li><Link to="/employees"><FaUsers /> Employees</Link></li>
          <li><Link to="/add-brand"><FaPlus /> Add Brands</Link></li>
          <li><Link to="/add-category"><FaPlus /> Add Categories</Link></li>
        </ul>

        <h4>Products</h4>
        <ul>
          <li><Link to="/clothes"><FaTshirt /> Clothes</Link></li>
          <li><Link to="/accessories"><FaThList /> Accessories</Link></li>
        </ul>

        <ul>
          <h4>More options</h4>
          <li><Link to="/orders"><FaTruck /> Orders</Link></li>
          <li><Link to="/customers"><FaUserFriends /> Customers</Link></li>
          <li><Link to="/suppliers"><FaUsers /> Suppliers</Link></li>
        </ul>
      </div>

      {isLoggedIn && (
        <div className="logout" onClick={handleLogout}>
          <FaSignOutAlt /> Log out
        </div>
      )}
      
    </div>
  );
};

export default Navbar;
