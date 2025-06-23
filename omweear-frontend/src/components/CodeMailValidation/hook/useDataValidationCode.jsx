import React, { useState } from "react";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const useDataValidationCode = () => {
  const ApiCode = "http://localhost:4000/api/registerCustomers/verifyCodeEmail";
  const navigate = useNavigate();

  const [verificationCode, setVerificationCode] = useState("");
  const [errorCode, setErrorCode] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const cleanData = () => {
    setVerificationCode("");
    setErrorCode(null);
    setSuccess(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!verificationCode) {
      setErrorCode("Ingresa el código que te enviamos");
      toast.error("Ingresa el código que te enviamos");
      return;
    }

    try {
      setLoading(true);

      const code = { verificationCode };

      const response = await fetch(ApiCode, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(code),
      });

      const data = await response.json();

      if (data.message === "Email verified succesfully") {
        toast.success("Correo verificado correctamente");
        setSuccess("Correo verificado");
        cleanData();
        setTimeout(() => navigate("/login"), 1000); 
      } else {
        toast.error(data.message);
        setErrorCode(data.message);
      }

    } catch (error) {
      setErrorCode(error.message);
      console.error("Error al verificar el código:", error);
      toast.error("Ocurrió un error al verificar el código");
    } finally {
      setLoading(false);
    }
  };

  return {
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
