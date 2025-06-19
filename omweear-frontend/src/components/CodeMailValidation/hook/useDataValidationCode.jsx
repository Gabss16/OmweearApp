import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

const useDataValidationCode = () => {

  const ApiCode = "http://localhost:4000/api/registerCustomers/verifyCodeEmail";

  const [id, setId] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [errorCode, setErrorCode] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([]);

  const cleanData = () => {
    setVerificationCode("");
    setId("");
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ( !verificationCode) {
      setError("Ingresa el código que te enviamos");
      toast.error("Ingresa el código que te enviamos");
      return;
    }

    try {
      const code = { verificationCode };
      console.log(code, "datos nuevos de la marca");

      const response = await fetch(ApiCode, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(code),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar la marca");
      }

      const data = await response.json();
      toast.success("Marca registrada");
      setSuccess("Marca registrada correctamente");
      cleanData();  
    } catch (error) {
      setError(error.message);
      console.error("Error al registrar la marca:", error);
      toast.error("Ocurrió un error al registrar la marca");
    } finally {
      setLoading(false);
    }
  };

  return {
    id,
    setId,
    verificationCode,
    setVerificationCode,
    errorCode,
    setErrorCode,
    success,
    setSuccess,
    loading,
    setLoading,
    cleanData, 
    handleSubmit,
  };
};

export default useDataValidationCode;
