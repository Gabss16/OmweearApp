import React from "react";
import RegisterSupplier from "../components/Supliers/RegisterSupplier";
import CustomTableSuppliers from "../components/Supliers/CustomTableSuppliers";
import userDataSuppliers from "../components/Supliers/hooks/useDataSuppliers";
import { Toaster } from "react-hot-toast";

const SuppliersPage = () => {
  const {
    id,
    name,
    setName,
    company,
    setCompany,
    email,
    setEmail,
    phone,
    setPhone,
    suppliers,
    handleSubmit,
    deleteSupplier,
    updateSupplier,
    handleUpdate,
  } = userDataSuppliers();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Proveedores</h1>

        {/* Formulario de registro */}
        <RegisterSupplier
          id={id}
          name={name}
          setName={setName}
          company={company}
          setCompany={setCompany}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}
        />

        {/* Tabla de proveedores */}
        <CustomTableSuppliers
          columns={["Nombre", "Empresa", "Correo", "Teléfono", "Acciones"]}
          data={suppliers.map((s) => ({
            _id: s._id,
            name: s.name,
            company: s.company,
            email: s.email,
            phone: s.phone,
          }))}
          onDelete={deleteSupplier}
          onEdit={updateSupplier}
          headerTitle="Tabla de Proveedores"
          headerDescription="Visualiza y gestiona tus proveedores registrados"
        />
      </div>

      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default SuppliersPage;
