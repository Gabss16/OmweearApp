import React from "react";
import RegisterEmployee from "../components/Employees/RegisterEmployee";
import CustomTable from "../components/Employees/CustomTable";
import useDataEmployees from "../components/Employees/hooks/useDataEmployees";
import { Toaster } from "react-hot-toast";

const Employees = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    dui,
    setDui,
    isss,
    setIsss,
    charge,
    setCharge,
    profilePhoto,
    setProfilePhoto,
    hireDate,
    setHireDate,
    birthday,
    setBirthDay,
    gender,
    setGender,
    employees,
    handleSubmit,
    deleteEmployee,
    updateEmployees,  
    handleUpdate,
    id,
  } = useDataEmployees();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Gestión de Empleados</h1>

        {/* Formulario de registro */}
        <RegisterEmployee
          id = {id}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          phone={phone}
          setPhone={setPhone}
          dui={dui}
          setDui={setDui}
          isss={isss}
          setIsss={setIsss}
          charge={charge}
          setCharge={setCharge}
          profilePhoto={profilePhoto}
          setProfilePhoto={setProfilePhoto}
          hireDate={hireDate}
          setHireDate={setHireDate}
          birthday={birthday}
          setBirthDay={setBirthDay}
          gender={gender}
          setGender={setGender}
          handleSubmit={handleSubmit}
          handleUpdate={handleUpdate}  
          updateEmployees={updateEmployees}  
        />

        {/* Tabla de marcas */}
        <CustomTable
          columns={["Nombre", "Email", "Contraseña", "Teléfono", "DUI", "N° ISSS", "Cargo", "Foto de perfíl","Fecha de contratación", "Fecha de Nacimiento", "Género", "Acciones"]}
          data={employees.map((em) => ({
            name: em.name,
            email: em.email,
            password: em.password,
            phone: em.phone,
            dui: em.dui,
            isss: em.isss,
            charge: em.charge,
            profilePhoto: em.profilePhoto,
            hireDate: em.hireDate,
            birthday: em.birthday,
            gender: em.gender,
            _id: em._id
          }))}
          onDelete={deleteEmployee}
          onEdit={updateEmployees}  // Aquí se pasa updateBrand cuando se va a editar
          headerTitle="Tabla de Empleados"
          headerDescription="Visualiza y gestiona tus empleados registrados"
        />
      </div>

      <Toaster toastOptions={{ duration: 1000 }} />
    </div>
  );
};

export default Employees;