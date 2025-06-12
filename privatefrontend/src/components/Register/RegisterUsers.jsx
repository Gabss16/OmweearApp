import React from "react";
import "./stiloE.css"

const RegisterUser = ({
  id,
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
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <form
  onSubmit={id ? handleUpdate : handleSubmit}
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

    <div>
      <input
        id="dui"
        type="number"
        placeholder="DUI"
        value={dui || ""}
        onChange={(e) => setDui(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        required
      />
    </div>
  </div>

  <div>
    <input
      id="isss"
      type="number"
      placeholder="ISSS"
      value={isss || ""}
      onChange={(e) => setIsss(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
      required
    />
  </div>

  <div>
    <input
      id="charge"
      type="text"
      placeholder="Cargo"
      value={charge || ""}
      onChange={(e) => setCharge(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
      required
    />
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

  <div className="div-date-inputs">
    <div>
      <label htmlFor="hireDate" className="block text-black font-semibold mb-1">
        Fecha de Contratación
      </label>
      <input
        id="hireDate"
        type="date"
        value={hireDate || ""}
        onChange={(e) => setHireDate(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        required
      />
    </div>

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
    <select
      id="gender"
      value={gender || ""}
      onChange={(e) => setGender(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
      required
    >
      <option value="">Seleccione un género</option>
      <option value="Masculino">Masculino</option>
      <option value="Femenino">Femenino</option>
    </select>
  </div>

  <button
    type="submit"
    className={`${
      id ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"
    } text-white px-6 py-2 rounded-md`}
  >
    {id ? "Actualizar Empleado" : "Registrar Empleado"}
  </button>
</form>

  );
};

export default RegisterUser;
