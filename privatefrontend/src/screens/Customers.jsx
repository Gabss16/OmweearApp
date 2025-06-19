import React from "react";
import CustomTable from "../components/customers/CustomTableC";
import userDataCustomers from "../components/customers/hooks/userDataCustomers";
import { Toaster } from "react-hot-toast";

const CustomersPage = () => {
  const {
    customers,
    fetchData,
  } = userDataCustomers();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Clientes</h1>

        <CustomTable
          columns={["Nombre", "Correo", "Teléfono", "Cumpleaños"]}
          data={customers}
          
          headerTitle="Tabla de Clientes"
          headerDescription="Lista de todos los clientes registrados en el sistema"
        />
      </div>
      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default CustomersPage;
