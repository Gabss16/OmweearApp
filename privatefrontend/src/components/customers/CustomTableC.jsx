import React from "react";


const CustomTable = ({
  columns,
  data,
  onEdit,
  onDelete,
  onAdd,
  headerTitle,
  headerDescription,
}) => {
  return (
    <div className="table-container">
      <h1 className="table-header">{headerTitle}</h1>
      <p className="table-description">{headerDescription}</p>

      <div className="table-actions">
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="button-group">
          {onAdd && (
            <button className="add-btn" onClick={onAdd}>
              Add Customer
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
          {data.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name} {customer.lastname}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{new Date(customer.birthday).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
