import React from "react";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import RegisterCustomers from "../components/Register/RegisterCustomers";
import useDataRegister from "../components/Register/hooks/useDataRegister";

const Register = () => {
  
  const {
    name,
    setName,
    lastname,
    setLastname,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    birthday,
    setBirthday,
    profilePhoto,
    setProfilePhoto,
    errorCustomer,
    loading,
    handleSubmit,
  } = useDataRegister();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <RegisterCustomers
          name={name}
          setName={setName}
          lastname={lastname}
          setLastname={setLastname}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          phone={phone}
          setPhone={setPhone}
          birthday={birthday}
          setBirthday={setBirthday}
          profilePhoto={profilePhoto}
          setProfilePhoto={setProfilePhoto}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        {errorCustomer && (
          <p className="text-red-600 mt-2 text-center">{errorCustomer}</p>
        )}
      </div>
      <Toaster toastOptions={{ duration: 1500 }} />
    </div>
  );
};

export default Register;

