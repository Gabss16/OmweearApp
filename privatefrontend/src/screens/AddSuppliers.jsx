import React from 'react';
import './AddSuppliers.css';
import { FaSearch } from 'react-icons/fa';

const AddSuppliers = () => {
  return (
    <div className="suppliers-container">
      <h1 className="title">
        <span className="black">Add</span> <span className="purple">Suppliers</span>
      </h1>

      <div className="input-group">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="email" />
      </div>
      <div className="input-group">
        <input type="text" placeholder="Company" />
        <input type="text" placeholder="phone" />
      </div>

      <div className="table-section">
        <div className="top-bar">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <FaSearch className="search-icon" />
          </div>
          <div className="btn-group">
            <button className="gray-btn-add">Add</button>
            <button className="gray-btn-edit">Edit</button>
            <button className="gray-btn-delete">Delete</button>
          </div>
        </div>

        <table className="suppliers-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>José Levi</td>
              <td>levi@gmail.com</td>
              <td>Admin</td>
              <td>7789-9030</td>
            </tr>
            <tr>
              <td>Emely Lovo</td>
              <td>lovo@gmail.com</td>
              <td>Admin</td>
              <td>7789-9030</td>
            </tr>
            <tr>
              <td>Gaby Pérez</td>
              <td>gp@gmail.com</td>
              <td>Admin</td>
              <td>7789-9030</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddSuppliers;
