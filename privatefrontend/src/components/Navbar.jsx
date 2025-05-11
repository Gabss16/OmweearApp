import React, { useState } from 'react';
import "../styles/Navbar.css"
import { FaUser, FaUsers, FaPlus, FaTshirt, FaThList, FaTags, FaTruck, FaUserFriends, FaGift, FaCreditCard, FaSignOutAlt } from 'react-icons/fa';
const Navbar = () => {
 const [showCategories, setShowCategories] = useState(false);
 const [showBrands, setShowBrands] = useState(false);
 return (
<div className="navbar">
<div className="logo">
<h2>OmWeear</h2>
<p>Management system</p>
</div>
<div className="nav-section">
<h4>Settings</h4>
<ul>
<li><FaUser /> profile</li>
<li><FaUsers /> employees</li>
<li><FaPlus /> add employees</li>
</ul>
<h4>Products</h4>
<ul>
<li><FaPlus /> add clothes</li>
<li><FaTshirt /> clothes</li>
<li><FaPlus /> add accessories</li>
<li><FaThList /> accessories</li>
</ul>
<h4 onClick={() => setShowCategories(!showCategories)} className="dropdown-toggle">
         Categories {showCategories ? '▲' : '▼'}
</h4>
       {showCategories && (
<ul>
<li><FaPlus /> add categories</li>
</ul>
       )}
<h4 onClick={() => setShowBrands(!showBrands)} className="dropdown-toggle">
         Brands {showBrands ? '▲' : '▼'}
</h4>
       {showBrands && (
<ul>
<li><FaPlus /> add brands</li>
</ul>
       )}
<ul>
<li>Orders</li>
<li><FaTruck /> Shipping status</li>
<li><FaUserFriends /> Customers</li>
<li><FaGift /> Promotions</li>
<li><FaCreditCard /> Payment methods</li>
</ul>
</div>
<div className="logout">
<FaSignOutAlt /> Log out
</div>
</div>
 );
};
export default Navbar;