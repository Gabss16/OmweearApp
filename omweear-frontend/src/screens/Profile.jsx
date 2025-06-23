import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import './Profile.css';
import useDataProfile from '../components/Profile/hook/useDataProfile';
import defaultProfilePic from "../images/Profilepic.png";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const {
    customerData,
    fetchCustomerById,
    handleUpdateCustomer,
    handleImageChange,
    preview,
    setPreview,
    setCustomerData,
  } = useDataProfile();

  // Cargar datos del cliente autenticado al montar
  useEffect(() => {
    if (user?.id) {
      fetchCustomerById(user.id);
    }
  }, [user]);

  // Limpiar preview al desmontar
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  // Manejadores para actualizar campos individuales
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user?.id) {
      await handleUpdateCustomer(user.id);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="profile-container">
      <div className="left-panel">
        <div className="user-card">
          <img
            src={preview || customerData?.image || defaultProfilePic}
            alt="Foto de perfil"
            className="profile-pic"
          />
          <input type="file" onChange={handleImageChange} accept="image/*" />
          <div className="user-info">
            <h4>{customerData?.name || "Nombre"}</h4>
            <h3>{customerData?.lastname || "Apellido"}</h3>
            <p className="email">{customerData?.email || "correo@ejemplo.com"}</p>
          </div>
        </div>

        <div className="settings">
          <button type="button" onClick={logout} className="logout-btn">
            Cerrar sesión
          </button>
        </div>
      </div>

      <div className="right-panel">
        <div className="info-grid">
          <div>
            <label>Password</label>
            <p>********</p>
          </div>
          <div>
            <label>BirthDay</label>
            <input
              type="date"
              name="birthday"
              value={customerData?.birthday || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={customerData?.phone || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={customerData?.email || ""}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Guardar cambios
        </button>
      </div>
    </form>
  );
};

export default Profile;
