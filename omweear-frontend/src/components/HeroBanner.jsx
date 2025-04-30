import React from 'react';
import './HeroBanner.css'; // Crea un archivo HeroBanner.css para los estilos
import bannerImage from '../../assets/main-banner.jpg'; // Importa la imagen del banner (reemplaza con tu ruta real)

function HeroBanner() {
  return (
    <div className="relative w-full h-auto mb-8 overflow-hidden">
    <img src={bannerImage} alt="OmWeear Banner" className="block w-full h-auto object-cover" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
      <h1 className="text-4xl font-bold mb-2">OmWeear</h1>
      <p className="text-xl italic">Move with Confidence</p>
      {/* Puedes añadir más elementos con clases de Tailwind aquí */}
    </div>
  </div>
  );
}

export default HeroBanner;