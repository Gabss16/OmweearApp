import React from "react";

// 👉 Componente para registrar o actualizar una categoría

const RegisterCategory = ({
   id, // ID de la categoría (si existe, estamos en modo edición)
  name, // Nombre de la categoría
  setName, // Función para actualizar el nombre
  description, // Descripción de la categoría
  setDescription, // Función para actualizar la descripción
  handleSubmit, // Función para registrar una nueva categoría
  handleUpdate, // Función para actualizar una categoría existente
}) => {
  return (
        //  Al hacer submit, se decide si registrar o actualizar dependiendo si hay ID

    <form
      onSubmit={id ? handleUpdate : handleSubmit}
      className="space-y-4 mb-8"
    >
            {/* Campo para el nombre de la categoría */}

      <div>
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
          Nombre de la Categoría
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nombre"
          value={name || ""}
          onChange={(e) => setName(e.target.value)} // 👉 Actualiza el nombre al escribir
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required // 👉 Campo obligatorio
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
      {/* Botón que cambia de texto y color dependiendo si se edita o registra */}

      <button
        type="submit"
        className={`${
          id ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"
        } text-white px-6 py-2 rounded-md`}
      >
        {id ? "Actualizar Categoría" : "Registrar Categoría"}
      </button>
    </form>
  );
};

export default RegisterCategory;
