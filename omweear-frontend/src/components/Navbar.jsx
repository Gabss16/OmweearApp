// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">Omweear</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-pink-500 transition">Inicio</Link></li>
          <li><Link to="/productos" className="hover:text-pink-500 transition">Productos</Link></li>
          <li><Link to="/nosotros" className="hover:text-pink-500 transition">Nosotros</Link></li>
          <li><Link to="/contacto" className="hover:text-pink-500 transition">Contacto</Link></li>
        </ul>
        <div>
          <Link to="/login" className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
