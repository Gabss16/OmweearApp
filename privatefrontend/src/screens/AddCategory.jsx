import React from "react";
import RegisterCategories from "../components/Categories/RegisterCategories";
import CustomTable from "../components/Categories/CustomTable";
import userDataCategories from "../components/Categories/hooks/userDataCategories";
import { Toaster } from "react-hot-toast";

const Categories = () => {
  const {
    name,
    setName,
    description,
    setDescription,
    categories,
    handleSubmit,
    deleteCategory,
    updateCategory,
    handleUpdate,
    id,
  } = userDataCategories();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Categorías</h1>

        {/* Formulario de registro */}
        <RegisterCategories
          id={id}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
          updateCategory={updateCategory}
        />

        {/* Tabla de categorías */}
        <CustomTable
          columns={["Name", "Description", "Actions"]}
          data={categories.map((cat) => ({
            name: cat.name,
            description: cat.description,
            _id: cat._id,
          }))}
          onDelete={deleteCategory}
          onEdit={updateCategory}
          headerTitle="Tabla de Categorías"
          headerDescription="Visualiza y gestiona tus categorías registradas"
        />
      </div>

      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default Categories;
