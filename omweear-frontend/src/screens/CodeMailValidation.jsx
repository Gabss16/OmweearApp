import React from "react";
import useDataValidationCode from "../components/CodeMailValidation/hook/useDataValidationCode";
import CodeMail from "../components/CodeMailValidation/CodeMail"
import Pilimg from "../images/Pil.png";
import "./CodeMailValidation.css";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";


const CodeMailValidation = () => {

  const {

    verificationCode,
    setVerificationCode,
    handleSubmit,

  } = useDataValidationCode();

  return (
    <div className="code-container">

      <div className="code-left">
        <h1>Omweear</h1>
        <p>Eleva tu práctica, Eleva tu estilo</p>
        <img src={Pilimg} alt="Omweear" />
      </div>

      <div className="code-right">
        <h1>Validación de Correo</h1>
        <p>Te enviamos un código a tu correo. Escríbelo abajo para continuar:</p>

        <CodeMail
          verificationCode={verificationCode}
          setVerificationCode={setVerificationCode}
          handleSubmit={handleSubmit}
        />
          
      </div>

      <Toaster toastOptions={{ duration: 1000 }} />

    </div>
  );
};

export default CodeMailValidation;
