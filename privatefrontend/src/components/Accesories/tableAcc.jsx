import React from "react";

const CustomTable = ({ columns, data, onEdit, onDelete }) => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr style={{ backgroundColor: "#eee" }}>
          {columns.map((col) => (
            <th
              key={col.accessor}
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                textAlign: "left",
              }}
            >
              {col.header}
            </th>
          ))}
          <th style={{ border: "1px solid #ccc", padding: "8px" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.length === 0 && (
          <tr>
            <td colSpan={columns.length + 1} style={{ textAlign: "center", padding: "16px" }}>
              No data available
            </td>
          </tr>
        )}
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((col) => (
              <td
                key={col.accessor}
                style={{ border: "1px solid #ccc", padding: "8px" }}
              >
                {col.render ? col.render(item[col.accessor], item) : item[col.accessor]}
              </td>
            ))}
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <button
                onClick={() => onEdit(item)}
                style={{ marginRight: "8px", cursor: "pointer" }}
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(item._id)}
                style={{ cursor: "pointer", color: "red" }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
