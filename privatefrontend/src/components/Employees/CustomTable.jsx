import React from "react";
import "./CustomTable.css";

const CustomTable = ({
  data,
  onAdd,
  onEdit,
  onDelete,
  headerTitle,
  headerDescription,
}) => {
  const columns = [
    "Nombre",
    "Correo",
    "Teléfono",
    "DUI",
    "ISSS",
    "Cargo",
    "Fecha de Contratación",
    "Fecha de Nacimiento",
    "Género",
    "Acciones"
  ];

    const formatDate = (dateString) => {
        if (!dateString) return "";
            const date = new Date(dateString);
            return date.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
        });
    };


  return (
    <div className="table-container">
      <h1 className="table-header">
        {headerTitle} <span className="custom-span"></span>
      </h1>
      <p className="table-description">{headerDescription}</p>

      <div className="table-actions">
        <input type="text" placeholder="Buscar..." className="search-bar" />
        <div className="button-group">
          {onAdd && (
            <button className="add-btn" onClick={onAdd}>
              Agregar
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
            <td>{element.email}</td>
            <td>{element.phone}</td>
            <td>{element.dui}</td>
            <td>{element.isss}</td>
            <td>{element.charge}</td>
            <td>{formatDate(element.hireDate)}</td>
            <td>{formatDate(element.birthday)}</td>
            <td>{element.gender}</td>
            <td>
                <button className="edit-btn" onClick={() => onEdit(element)}>Edit</button>
                <button className="delete-btn" onClick={() => {
                if (window.confirm("¿Estás seguro de eliminar este empleado?")) {
                    onDelete(element._id);
                }
                }}>
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

export default CustomTable;
