import React from "react";
import "./estiloRS.css";

const RegisterSupplier = ({
  id,
  name,
  setName,
  company,
  setCompany,
  email,
  setEmail,
  phone,
  setPhone,
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <form onSubmit={id ? handleUpdate : handleSubmit} className="space-y-4">
      {/* Contenedor para Nombre y Empresa */}
      <div className="div-inputs">
        <div>
          <label className="block font-semibold mb-1">Nombre del proveedor</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=""
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Empresa</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className=""
          />
        </div>
      </div>

      {/* Campo de Correo electrónico */}
      <div>
        <label className="block font-semibold mb-1">Correo electrónico</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=""
        />
      </div>

      {/* Contenedor para Teléfono y Botón */}
      <div className="div-phone-btn">
        <div>
          <label className="block font-semibold mb-1">Teléfono</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className=""
          />
        </div>

        {/* Botón de Enviar */}
        <button
          type="submit"
          className=""
        >
          {id ? "Actualizar proveedor" : "Registrar proveedor"}
        </button>
      </div>
    </form>
  );
};

export default RegisterSupplier;

