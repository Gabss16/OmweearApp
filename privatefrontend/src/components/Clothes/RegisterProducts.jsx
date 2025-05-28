import React from "react";

const RegisterProduct = ({
  id,
  name,
  setName,
  description,
  setDescription,
  price,
  setPrice,
  stock,
  setStock,
  idCategory,
  setIdCategory,
  idBrand,
  setIdBrand,
  sizesAvailable,
  setSizesAvailable,
  idSupplier,
  setIdSupplier,
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <form
      onSubmit={id ? handleUpdate : handleSubmit}
      className="space-y-4 mb-8"
    >
      <div>
        <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
          Nombre del Producto
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
        <label htmlFor="description" className="block text-gray-700 font-semibold mb-1">
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

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="price" className="block text-gray-700 font-semibold mb-1">
            Precio
          </label>
          <input
            id="price"
            type="number"
            placeholder="Precio"
            value={price || ""}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label htmlFor="stock" className="block text-gray-700 font-semibold mb-1">
            Stock
          </label>
          <input
            id="stock"
            type="number"
            placeholder="Stock"
            value={stock || ""}
            onChange={(e) => setStock(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label htmlFor="idCategory" className="block text-gray-700 font-semibold mb-1">
            ID Categoría
          </label>
          <input
            id="idCategory"
            type="text"
            placeholder="ID Categoría"
            value={idCategory || ""}
            onChange={(e) => setIdCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label htmlFor="idBrand" className="block text-gray-700 font-semibold mb-1">
            ID Marca
          </label>
          <input
            id="idBrand"
            type="text"
            placeholder="ID Marca"
            value={idBrand || ""}
            onChange={(e) => setIdBrand(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label htmlFor="sizesAvailable" className="block text-gray-700 font-semibold mb-1">
            Tallas disponibles
          </label>
          <input
            id="sizesAvailable"
            type="text"
            placeholder="Ej: S, M, L"
            value={sizesAvailable || ""}
            onChange={(e) => setSizesAvailable(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div>
          <label htmlFor="idSupplier" className="block text-gray-700 font-semibold mb-1">
            ID Proveedor
          </label>
          <input
            id="idSupplier"
            type="text"
            placeholder="ID Proveedor"
            value={idSupplier || ""}
            onChange={(e) => setIdSupplier(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className={`${
          id ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"
        } text-white px-6 py-2 rounded-md`}
      >
        {id ? "Actualizar Producto" : "Registrar Producto"}
      </button>
    </form>
  );
};

export default RegisterProduct;
