// RegisterBrand.jsx
import React from "react";

const RegisterBrand = ({
  id,
  name,
  setName,
  description,
  setDescription,
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <form
      onSubmit={id ? handleUpdate : handleSubmit}  // Condicional para determinar si es para actualizar o registrar
      className="space-y-4 mb-8"
    >
      <div>
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
          Nombre de la Marca
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nombre"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-gray-700 font-semibold mb-1"
        >
          Descripción
        </label>
        <textarea
          id="description"
          placeholder="Descripción"
          value={description || ""}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <button
        type="submit"
        className={`${
          id ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"
        } text-white px-6 py-2 rounded-md`}
      >
        {id ? "Actualizar Marca" : "Registrar Marca"}  {/* Cambia el texto según si es actualización o registro */}
      </button>
    </form>
  );
};

export default RegisterBrand;
