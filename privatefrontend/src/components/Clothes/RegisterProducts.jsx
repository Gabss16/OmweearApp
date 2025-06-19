import React, { useState } from "react";
import { toast } from "react-hot-toast";

export default function RegisterProduct({ 
  name, setName, description, setDescription, price, setPrice, 
  stock, setStock, idCategory, setIdCategory, idBrand, setIdBrand, 
  sizesAvailable, setSizesAvailable, idSupplier, setIdSupplier, 
  handleSubmit, handleUpdate 
}) {
  const [image, setImage] = useState(null); // Guardar imagen seleccionada

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Seleccionar el archivo de imagen
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("idCategory", idCategory);
    formData.append("idBrand", idBrand);
    formData.append("sizesAvailable", sizesAvailable);
    formData.append("idSupplier", idSupplier);
    if (image) formData.append("imagen", image); // Agregar la imagen al formulario

    try {
      await handleSubmit(formData); // Enviar el formulario con la imagen
      toast.success("Product added successfully!");
    } catch (error) {
      toast.error("Error adding product.");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
      <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" required />
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <select value={idCategory} onChange={(e) => setIdCategory(e.target.value)} required>
        <option value="">Select Category</option>
        {/* Map categories here */}
      </select>
      <select value={idBrand} onChange={(e) => setIdBrand(e.target.value)} required>
        <option value="">Select Brand</option>
        {/* Map brands here */}
      </select>
      <input type="text" value={sizesAvailable} onChange={(e) => setSizesAvailable(e.target.value)} placeholder="Sizes Available" required />
      <select value={idSupplier} onChange={(e) => setIdSupplier(e.target.value)} required>
        <option value="">Select Supplier</option>
        {/* Map suppliers here */}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
