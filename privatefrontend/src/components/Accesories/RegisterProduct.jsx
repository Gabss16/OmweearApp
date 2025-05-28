import React, { useEffect, useState } from "react";

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
  sizesAvailable,
  setSizesAvailable,
  idCategory,
  setIdCategory,
  idBrand,
  setIdBrand,
  idSupplier,
  setIdSupplier,
  handleSubmit,
  handleUpdate,
}) => {
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  // Cargar datos para los combobox
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, brandRes, suppRes] = await Promise.all([
          fetch("http://localhost:4000/api/categories"),
          fetch("http://localhost:4000/api/brands"),
          fetch("http://localhost:4000/api/supliers"),
        ]);
        const categoriesData = await catRes.json();
        const brandsData = await brandRes.json();
        const suppliersData = await suppRes.json();

        setCategories(categoriesData);
        setBrands(brandsData);
        setSuppliers(suppliersData);
      } catch (error) {
        console.error("Error loading select options", error);
      }
    };
    fetchData();
  }, []);

  return (
    <form
      onSubmit={id ? handleUpdate : handleSubmit}
      className="space-y-4 mb-8"
    >
      {/* Nombre */}
      <div>
        <label htmlFor="name" className="block font-semibold mb-1">
          Nombre del Producto
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nombre"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      {/* Descripción */}
      <div>
        <label htmlFor="description" className="block font-semibold mb-1">
          Descripción
        </label>
        <textarea
          id="description"
          placeholder="Descripción"
          value={description || ""}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      {/* Precio */}
      <div>
        <label htmlFor="price" className="block font-semibold mb-1">
          Precio
        </label>
        <input
          id="price"
          type="number"
          placeholder="Precio"
          value={price || ""}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md"
          min="0"
          step="0.01"
        />
      </div>

      {/* Stock */}
      <div>
        <label htmlFor="stock" className="block font-semibold mb-1">
          Stock
        </label>
        <input
          id="stock"
          type="number"
          placeholder="Stock"
          value={stock || ""}
          onChange={(e) => setStock(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md"
          min="0"
        />
      </div>


      {/* Categoría */}
      <div>
        <label htmlFor="idCategory" className="block font-semibold mb-1">
          Categoría
        </label>
        <select
          id="idCategory"
          value={idCategory || ""}
          onChange={(e) => setIdCategory(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="">-- Selecciona una categoría --</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Marca */}
      <div>
        <label htmlFor="idBrand" className="block font-semibold mb-1">
          Marca
        </label>
        <select
          id="idBrand"
          value={idBrand || ""}
          onChange={(e) => setIdBrand(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="">-- Selecciona una marca --</option>
          {brands.map((brand) => (
            <option key={brand._id} value={brand._id}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>

      {/* Proveedor */}
      <div>
        <label htmlFor="idSupplier" className="block font-semibold mb-1">
          Proveedor
        </label>
        <select
          id="idSupplier"
          value={idSupplier || ""}
          onChange={(e) => setIdSupplier(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="">-- Selecciona un proveedor --</option>
          {suppliers.map((supplier) => (
            <option key={supplier._id} value={supplier._id}>
              {supplier.name}
            </option>
          ))}
        </select>
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
