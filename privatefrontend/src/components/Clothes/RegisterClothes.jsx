import React from "react";

const RegisterClothes = ({
  form,
  setForm,
  handleCreate,
  handleUpdate,
}) => {
  const isEditing = !!form._id;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={isEditing ? handleUpdate : handleCreate}
      className="space-y-4 w-full"
    >
      {/* Nombre */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Nombre</label>
        <input
          type="text"
          name="name"
          value={form.name || ""}
          onChange={handleChange}
          placeholder="Nombre de la prenda"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Descripción */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Descripción</label>
        <textarea
          name="description"
          value={form.description || ""}
          onChange={handleChange}
          placeholder="Descripción del producto"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Precio */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Precio</label>
        <input
          type="number"
          name="price"
          value={form.price || ""}
          onChange={handleChange}
          placeholder="Precio"
          required
          min="0"
          step="0.01"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Stock */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Stock</label>
        <input
          type="number"
          name="stock"
          value={form.stock || ""}
          onChange={handleChange}
          placeholder="Stock"
          required
          min="0"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Categoría */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">ID Categoría</label>
        <input
          type="text"
          name="idCategory"
          value={form.idCategory || ""}
          onChange={handleChange}
          placeholder="ID de la categoría"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Marca */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">ID Marca</label>
        <input
          type="text"
          name="idBrand"
          value={form.idBrand || ""}
          onChange={handleChange}
          placeholder="ID de la marca"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Proveedor */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">ID Proveedor</label>
        <input
          type="text"
          name="idSupplier"
          value={form.idSupplier || ""}
          onChange={handleChange}
          placeholder="ID del proveedor"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Imagen */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">URL de Imagen</label>
        <input
          type="text"
          name="images"
          value={form.images || ""}
          onChange={handleChange}
          placeholder="URL de la imagen"
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Tallas */}
      <div>
        <label className="block font-semibold mb-1 text-gray-700">Tallas disponibles (separadas por coma)</label>
        <input
          type="text"
          name="sizesAvailable"
          value={form.sizesAvailable || ""}
          onChange={handleChange}
          placeholder="Ej: S,M,L,XL"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Botón de envío */}
      <button
        type="submit"
        className={`${
          isEditing ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"
        } text-white px-6 py-2 rounded-md`}
      >
        {isEditing ? "Actualizar Prenda" : "Registrar Prenda"}
      </button>
    </form>
  );
};

export default RegisterClothes;
