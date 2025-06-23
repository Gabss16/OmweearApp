import React, { useState, useEffect } from "react";

const updateProfile = ({

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
  setProfilePhoto,
  handleUpdate,

}) => {

    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
            if (file && file.type.startsWith("image/")) {
                setProfilePhoto(file);
                setPreview(URL.createObjectURL(file));
            } else {
                setProfilePhoto(null);
                setPreview(null);
            }
    };

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

  return (

    <form
        onSubmit={handleUpdate}
        className="space-y-4 mb-8"
    >

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

  <div>
        <label htmlFor="profilePhoto" className="block text-black font-semibold mb-1">
          Foto de perfil
        </label>
        <input
          id="profilePhoto"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        />
        {preview && (
          <div className="image-profile">
            <img
              src={preview}
              alt="Vista previa"
              className="w-32 h-32 object-cover rounded-full border"
            />
          </div>
        )}
      </div>

  <button
    type="submit"
    className="dataupdate-btn">
    Guardar Cambios
  </button>
</form>

  );
};

export default updateProfile;