import React from "react";

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
      <div>
        <label className="block font-semibold mb-1">Nombre del proveedor</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Empresa</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Correo electrónico</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Teléfono</label>
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        {id ? "Actualizar proveedor" : "Registrar proveedor"}
      </button>
    </form>
  );
};

export default RegisterSupplier;
