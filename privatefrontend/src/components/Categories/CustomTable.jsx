import React from "react";
import "./CustomTable.css";

const CustomTable = ({
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
            <button className="add-btn" onClick={onAdd}>
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
          {data.map((element, rowIndex) => (
            <tr key={rowIndex}>
              <td>{element.name}</td>
              <td>{element.description}</td>
              <td>
              <button className="edit-btn" onClick={() => onEdit(element)}>
  Edit
</button>
                <button
                  className="delete-btn"
                  onClick={() => {
                    if (
                      window.confirm("¿Estás seguro de eliminar esta Categoria?")
                    ) {
                      onDelete(element._id);
                    }
                  }}
                >
                  Delete {element._id}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
