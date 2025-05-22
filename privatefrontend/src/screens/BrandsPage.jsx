// BrandsPage.jsx
import React from "react";
import RegisterBrand from "../components/Brands/RegisterBrand";
import CustomTable from "../components/Brands/CustomTable";
import userDataBrands from "../components/Brands/hooks/userDataBrands";
import { Toaster } from "react-hot-toast";

const Brands = () => {
  const {
    name,
    setName,
    description,
    setDescription,
    brands,
    handleSubmit,
    deleteBrand,
    updateBrand,  // Asegúrate de recibir updateBrand aquí
    handleUpdate,
    id,
  } = userDataBrands();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Marcas</h1>

        {/* Formulario de registro */}
        <RegisterBrand
        id = {id}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}  // Pasa handleUpdate si se va a editar una marca
          updateBrand={updateBrand}  // Pasa updateBrand para cuando se hace clic en Editar
        />

        {/* Tabla de marcas */}
        <CustomTable
          columns={["Name", "Description", "Actions"]}
          data={brands.map((b) => ({
            name: b.name,
            description: b.description,
            _id: b._id
          }))}
          onDelete={deleteBrand}
          onEdit={updateBrand}  // Aquí se pasa updateBrand cuando se va a editar
          headerTitle="Tabla de Marcas"
          headerDescription="Visualiza y gestiona tus marcas registradas"
        />
      </div>

      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default Brands;
