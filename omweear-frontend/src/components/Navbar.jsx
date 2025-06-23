import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useContext(AuthContext);  

  if (isLoading) {
    return null; // No renderizar navbar hasta que sepamos si hay sesión
  }

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Flecha + logo alineados */}
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => navigate(-1)} 
            className="text-2xl text-gray-700 hover:text-pink-500 transition leading-none"
            aria-label="Go back"
          >
            ←
          </button>
          <h1 className="text-2xl font-bold text-gray-900 leading-none">Omweear</h1>
        </div>

        {/* Enlaces */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-pink-500 transition">HOME</Link></li>
          <li><Link to="/shop" className="hover:text-pink-500 transition">PRODUCTS</Link></li>
          <li><Link to="/shoppingcart" className="hover:text-pink-500 transition">CART</Link></li>

          {user && (
            <li><Link to="/profile" className="hover:text-pink-500 transition">PROFILE</Link></li>
          )}
        </ul>

        {/* Login */}
        {!user && (
          <div className="hidden md:block">
            <Link to="/login" className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
