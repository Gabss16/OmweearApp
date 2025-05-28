import React from "react";
import CustomTable from "../components/Clothes/CustomTable";
import useDataProducts from "../components/Clothes/hooks/userDataProducts";
import RegisterProduct from "../components/Clothes/RegisterProducts"; 
import { Toaster } from "react-hot-toast";

export default function AddClothes() {
  const {
    id,
    setId,
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
    products,
    handleSubmit,
    handleUpdate,
    deleteProduct,
    updateProduct,
    cleanData,
  } = useDataProducts();

  const columns = [
    "Name",
    "Description",
    "Price",
    "Stock",
    "Brand",
    "Category",
    "Supplier",
    "Sizes",
    "Image",
    "Actions",
  ];

  return (
    <div className="add-clothes-container">
      <Toaster />
      <main className="add-clothes-main">
        <h1 className="add-clothes-title">
          <span>Add Clothes</span>
        </h1>

        <section className="add-clothes-form-section">
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
            sizesAvailable={sizesAvailable}
            setSizesAvailable={setSizesAvailable}
            idSupplier={idSupplier}
            setIdSupplier={setIdSupplier}
            handleSubmit={handleSubmit}
            handleUpdate={handleUpdate}
          />
        </section>

        <section className="add-clothes-table-section">
          <CustomTable
            columns={columns}
            data={products}
            onAdd={cleanData}
            onEdit={updateProduct}
            onDelete={deleteProduct}
            headerTitle="Product List"
            headerDescription="Lista de productos registrados en el sistema."
          />
        </section>
      </main>
    </div>
  );
}
