import React from "react";
import "./CustomTable.css";


//  Componente reutilizable para mostrar una tabla con acciones (Add, Edit, Delete)

const CustomTable = ({
  columns, // Títulos de las columnas
  data,  // Datos que se mostrarán en la tabla
  onAdd,
  onEdit,
  onDelete,
  headerTitle, // Título principal de la tabla
  headerDescription,// Descripción que aparece debajo del título
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
            <button className="add-btn" type="button" onClick={onAdd}>
              Add
            </button>
          )}
        </div>
      </div>
  {/* Tabla que muestra los datos */}
      <table>
        <thead>
          <tr>
             {/* Encabezados de las columnas */}
            {columns.map((col, idx) => (
              <th key={idx}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
           {/* Filas con los datos */}
          {data.map((element, rowIndex) => (
            <tr key={rowIndex}>
              <td>{element.name}</td>
              <td>{element.description}</td>
              <td>
                {/* Botón para editar, llama a onEdit con el elemento */}
                <button
                  className="edit-btn"
                  type="button"
                  onClick={() => onEdit(element)}
                >
                  Edit
                </button>
                  {/* Botón para eliminar, con confirmación */}
                <button
                  className="delete-btn"
                  type="button"
                  onClick={() => {
                    if (
                      window.confirm(
                        "¿Estás seguro de eliminar esta Producto?"
                      )
                    ) {
                      onDelete(element._id); // Llama a onDelete con el ID del elemento
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

export default CustomTable;
