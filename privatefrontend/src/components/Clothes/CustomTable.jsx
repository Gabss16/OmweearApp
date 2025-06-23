import React from "react";
import "./CustomTable.css";

//  Componente de tabla reutilizable para mostrar datos con acciones

const CustomTable = ({
  columns,            //  Encabezados de la tabla
  data,               // Datos a mostrar en filas
  onAdd,              //  Función para agregar nuevo registro
  onEdit,             //  Función para editar un registro
  onDelete,           //  Función para eliminar un registro
  headerTitle,        //  Título del módulo
  headerDescription,  //  Descripción opcional
}) => {
  return (
    <div className="table-container">
        {/*  Encabezado del módulo */}
      <h1 className="table-header">
        {headerTitle} <span className="custom-span"></span>
      </h1>
      <p className="table-description">{headerDescription}</p>

  {/*  Barra de búsqueda y botón de agregar */}
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
 {/*  Tabla principal */}
      <table>
        <thead>
          <tr>
             {/*  Renderiza encabezados de columna */}
            {columns.map((col, idx) => (
              <th key={idx}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
           {/* Renderiza cada fila con datos */}
          {data.map((element, rowIndex) => (
            <tr key={rowIndex}>
              <td>{element.name}</td>
              <td>{element.description}</td>
         <td>{element.price}</td>
      <td>{element.stock}</td>
 <td>{element.idBrand?.name}</td>
      <td>{element.idCategory?.name}</td>
      <td>{element.idSupplier?.name}</td>
            <td>{element.sizesAvailable}</td>
         <td>
          <img src={element.imagen} alt={element.name} /></td>


      {/*  Botones de acción por fila */}
              <td>
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => onEdit(element)}
                >
                  Edit
                </button>
              <button
  type="button"
  className="delete-btn"
  onClick={() => {
    if (window.confirm("¿Estás seguro de eliminar este producto?")) {
      onDelete(element._id); // Solo esto
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
