// Importación de dependencias necesarias para el componente
import React, { useState } from "react";
import CustomTable from "../components/Clothes/CustomTable"; // Componente para mostrar los productos en una tabla personalizada
import useDataProducts from "../components/Clothes/hooks/userDataProducts"; // Hook personalizado que maneja el estado y funciones CRUD para productos
import RegisterProduct from "../components/Clothes/RegisterProducts"; // Componente de formulario para registrar o editar productos
import { Toaster } from "react-hot-toast"; // Componente para mostrar notificaciones tipo "toast"

// Componente principal que gestiona la vista de "Agregar Ropa"
export default function AddClothes() {
 
 
  // Se desestructura el hook para acceder al estado y funciones necesarias

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
    setImage,
    image,
    products, // Lista de productos disponibles
    handleSubmit, // Función para registrar un nuevo producto
    handleUpdate, // Función para actualizar un producto existente
    deleteProduct, // Función para eliminar un producto
    updateProduct, // Función para cargar los datos del producto seleccionado en el formulario
    cleanData, // Función para limpiar el formulario
  } = useDataProducts();

  // Definición de las columnas que se mostrarán en la tabla de productos
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

  // Estructura del componente que se renderiza en pantalla
  return (
    <div className="add-clothes-container"> {/* Contenedor principal */}
      <Toaster /> {/* Componente para mostrar notificaciones en pantalla */}

      <main className="add-clothes-main"> {/* Contenido principal */}
        <h1 className="add-clothes-title">
          <span>Add Product</span> {/* Título de la página */}
        </h1>

        {/* Sección del formulario de registro de productos */}
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
            image={image}
            setImage={setImage}
            setIdSupplier={setIdSupplier}
            handleSubmit={handleSubmit} // Se llama al enviar el formulario para crear un producto
            handleUpdate={handleUpdate} // Se llama al actualizar un producto ya existente
          />
        </section>

        {/* Sección de la tabla de productos */}
        <section className="add-clothes-table-section">
          <CustomTable
            columns={columns} // Columnas definidas anteriormente
            data={products} // Lista de productos para mostrar
            onAdd={cleanData} // Función para limpiar el formulario cuando se quiere añadir uno nuevo
            onEdit={updateProduct} // Se carga el producto seleccionado en el formulario
            onDelete={deleteProduct} // Se elimina el producto seleccionado
            headerTitle="Product List" // Título de la tabla
            headerDescription="Lista de productos registrados en el sistema." // Descripción de la tabla
          />
        </section>
      </main>
    </div>
  );
}
