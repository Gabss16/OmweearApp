import React, { useState, useEffect } from "react";

const CodeMail = ({

  verificationCode,
  setVerificationCode,
  handleSubmit,

}) => {

  return (

    <form
        onSubmit={handleSubmit}
        className="space-y-4 mb-8"
    >

    <div>
      <input
        id="verificationCode"
        type="text"
        placeholder="XXXXX"
        value={verificationCode || ""}
        onChange={(e) => setVerificationCode(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        required                
      />
    </div>

  <button
    type="submit"
    className="code-btn">
    Verificar código
  </button>
</form>

  );
};

export default CodeMail;