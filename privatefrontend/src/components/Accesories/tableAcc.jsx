import React from "react";
import './estiloA.css'; // Importa tu archivo CSS aquí

const CustomTable = ({ columns, data, onEdit, onDelete }) => {
  return (
    <div className="table-container">
      <div className="table-header">
        <span>Table Header</span>
        <div className="custom-span"></div>
      </div>
      <p className="table-description">Some description about the table.</p>

      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.accessor}>
                {col.header}
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + 1} style={{ textAlign: "center", padding: "16px" }}>
                No data available
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item._id}>
                {columns.map((col) => (
                  <td key={col.accessor}>
                    {col.render ? col.render(item[col.accessor], item) : item[col.accessor]}
                  </td>
                ))}
                <td>
                  <div className="button-group">
                    <button
                      onClick={() => onEdit(item)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(item._id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
