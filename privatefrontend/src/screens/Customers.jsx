import React, { useState } from 'react';
import CustomTable from '../components/CustomTable';
import './BrandsPage.css';
//import brandImage from '../assets/brand.png';

const BrandsPage = () => {
  const [brandData, setBrandData] = useState([
    { Name: 'Señoritas', Description: 'Para las señoritas' },
    { Name: 'Damas', Description: 'Para las damas' },
    { Name: 'Accesorios', Description: 'Son accesorios' },
  ]);

  const [formData, setFormData] = useState({ Name: '', Description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBrandData([...brandData, formData]);
    setFormData({ Name: '', Description: '' });
  };

  return (
    <div className="brands-page">
      <h1>
        Add <span>CUSTOMERS</span>
      </h1>
      <div className="form-brand">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formData.Name}
            onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={formData.Description}
            onChange={(e) => setFormData({ ...formData, Description: e.target.value })}
          />
          <button className="submit-btn" type="submit">
            Add Brand
          </button>
        </form>
       
      </div>

      <CustomTable columns={['Name', 'Description']} data={brandData} />
    </div>
  );
};

export default BrandsPage;
