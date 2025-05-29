import React from "react";
import "./estiloS.css"

const CustomTableSuppliers = ({
  columns,
  data,
  onAdd,
  onEdit,
  onDelete,
  headerTitle,
  headerDescription,
}) => {
  return (
    <div className="table-container">
      <h1 className="table-header">
        {headerTitle} <span className="custom-span"></span>
      </h1>
      <p className="table-description">{headerDescription}</p>

      <div className="table-actions">
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="button-group">
          {onAdd && (
            <button type="button" className="add-btn" onClick={onAdd}>
              Add
            </button>
          )}
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
          {data.map((supplier, rowIndex) => (
            <tr key={rowIndex}>
              <td>{supplier.name}</td>
              <td>{supplier.company}</td>
              <td>{supplier.email}</td>
              <td>{supplier.phone}</td>
              <td>
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => onEdit(supplier)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => {
                    if (
                      window.confirm(
                        "¿Estás seguro de eliminar este proveedor?"
                      )
                    ) {
                      onDelete(supplier._id);
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTableSuppliers;
