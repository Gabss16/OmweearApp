import React from "react";
//import "./stiloE.css"

const RegisterCustomer = ({
  id,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  phone,
  setPhone,
  birthday,
  setBirthDay,
  lastname,
  setLastname,
  profilePhoto,
  setProfilePhoto,
  handleSubmit,
}) => {
  return (
    <form
  onSubmit={handleSubmit}
  className="space-y-4 mb-8"
>
  <div className="div-inputs">
    <div>
      <input
        id="name"
        type="text"
        placeholder="Nombre"
        value={name || ""}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
        required
      />
    </div>

    <div>
        <input
        id="lastname"
        type="text"
        placeholder="Apellido"
        value={lastname || ""}
        onChange={(e) => setLastname(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        required
        />
    </div>

    <div>
      <input
        id="email"
        type="email"
        placeholder="Correo"
        value={email || ""}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        required
      />
    </div>
  </div>

  <div>
    <input
      id="password"
      type="password"
      placeholder="Contraseña"
      value={password || ""}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
      required
    />
  </div>

  <div className="div-inputs">
    <div>
      <input
        id="phone"
        type="number"
        placeholder="Teléfono"
        value={phone || ""}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        required
      />
    </div>
  </div>

  <div className="div-date-input">
    <div>
      <label htmlFor="birthday" className="block text-black font-semibold mb-1">
        Fecha de Nacimiento
      </label>
      <input
        id="birthday"
        type="date"
        value={birthday || ""}
        onChange={(e) => setBirthDay(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        required
      />
    </div>
  </div>

  <div>
    <input
      id="profilePhoto"
      type="text"
      placeholder="Foto de perfil (URL)"
      value={profilePhoto || ""}
      onChange={(e) => setProfilePhoto(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
    />
  </div>

  <button
    type="submit"
    className={`${
      "bg-darkgreen-500 hover:bg-darkgreen-600"
    } text-white px-6 py-2 rounded-md`}
  >
    {"Registrar Empleado"}
  </button>
</form>

  );
};

export default RegisterCustomer;
