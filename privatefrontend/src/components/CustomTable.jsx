import React from 'react';
import './CustomTable.css'; // Opcional, para estilos

const CustomTable = ({ columns, data, onAdd, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <div className="table-actions">
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="button-group">
          <button className="add-btn" onClick={onAdd}>Add</button>
          <button className="edit-btn" onClick={onEdit}>Edit</button>
          <button className="delete-btn" onClick={onDelete}>Delete</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={idx}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{row[col.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
