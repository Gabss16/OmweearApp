import React from 'react';
import './CustomTable.css'; // Opcional, para estilos

const brand=[]

const CustomTable = ({ columns, data, onAdd, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <div className="table-actions">
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="button-group">
          <button className="add-btn" onClick={onAdd}>Add</button>
          
        </div>
      </div>
      <table>
        <thead>

          <tr>
            {columns.map((col, idx) => (
              <th key={idx}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((element, rowIndex) => (
            <tr key={rowIndex}>
              <td >{element.name}</td>
              <td >{element.description}</td>
              <td>
              <button className="edit-btn" onClick={()=>alert(element._id)}>Edit</button>
              <button className="delete-btn" onClick={()=>alert(element._id)}>Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;


