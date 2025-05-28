// ProductsPage.jsx
import React from "react";
import RegisterProduct from "../components/Accesories/RegisterProduct";
import CustomTable from "../components/Accesories/tableAcc";
import userDataProducts from "../components/Accesories/hooks/userDataProducts";
import { Toaster } from "react-hot-toast";

const Products = () => {
  const {
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
    idSupplier,
    setIdSupplier,
    images,
    setImages,
    sizesAvailable,
    setSizesAvailable,
    products,
    handleSubmit,
    deleteProduct,
    updateProduct,    // Función para cargar el producto a editar
    handleUpdate,     // Función para actualizar el producto
    id,
  } = userDataProducts();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Productos</h1>

        {/* Formulario de registro */}
        <RegisterProduct
          id={id}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          price={price}
          setPrice={setPrice}
          stock={stock}
          setStock={setStock}
          idCategory={idCategory}
          setIdCategory={setIdCategory}
          idBrand={idBrand}
          setIdBrand={setIdBrand}
          idSupplier={idSupplier}
          setIdSupplier={setIdSupplier}
          images={images}
          setImages={setImages}
          sizesAvailable={sizesAvailable}
          setSizesAvailable={setSizesAvailable}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}  // para actualizar producto
          updateProduct={updateProduct} // para cargar datos al editar
        />

        {/* Tabla de productos */}
        <CustomTable
  columns={[
    { header: "Name", accessor: "name" },
    { header: "Description", accessor: "description" },
    { header: "Price", accessor: "price" },
    { header: "Stock", accessor: "stock" },
    { header: "Category", accessor: "category" },
    { header: "Brand", accessor: "brand" },
    { header: "Supplier", accessor: "supplier" },
  ]}
  data={products.map((p) => ({
    name: p.name,
    description: p.description,
    price: p.price,
    stock: p.stock,
    category: p.idCategory?.name || "",
    brand: p.idBrand?.name || "",
    supplier: p.idSupplier?.name || "",
    _id: p._id,
  }))}
  onDelete={deleteProduct}
  onEdit={updateProduct}
/>
      </div>

      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default Products;
