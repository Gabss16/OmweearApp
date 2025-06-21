import React, { useState } from "react";
import { toast } from "react-hot-toast";
import DropDown from "../Dropdown";
import { useGetData } from "./hooks/UseGetData";

export default function RegisterProduct({ 
  id,
  name, setName, description, setDescription, price, setPrice, 
  stock, setStock, idCategory, setIdCategory, idBrand, setIdBrand, 
  sizesAvailable, setSizesAvailable, idSupplier, setIdSupplier, 
  setImage, image,
  handleSubmit, handleUpdate 
}) {

const handleImageChange = (e) => {
  setImage(e.target.files[0]); // <- Esto es correcto
};

  const { brands, providers, categories } = useGetData();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (id) {
      await handleUpdate(e); // actualiza producto existente
    } else {
      await handleSubmit();  // registra nuevo producto
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
      <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" required />
      <input type="file" onChange={handleImageChange} accept="image/*" />
            <DropDown
        id="idBrand"
        label="Proveedor"
        options={brands}
        value={idBrand}
        onChange={(e) => setIdBrand(e.target.value)}
      />
            <DropDown
        id="idSupplier"
        label="Proveedor"
        options={providers}
        value={idSupplier}
        onChange={(e) => setIdSupplier(e.target.value)}
      />
            <DropDown
        id="idCategory"
        label="Proveedor"
        options={categories}
        value={idCategory}
        onChange={(e) => setIdCategory(e.target.value)}
      />

            <input
        type="text"
        value={sizesAvailable}
        onChange={(e) => setSizesAvailable(e.target.value)}
        placeholder="Tallas disponibles (ej. S, M, L)"
        required
      />
      <button type="submit">{id ? "Actualizar" : "Registrar"}</button>
    </form>
  );
}