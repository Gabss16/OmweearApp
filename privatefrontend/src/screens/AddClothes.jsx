import React from "react";
import Clothes from "../images/clothes.jpg";
import "../screens/AddClothes.css";
import useDataClothes from "../components/Clothes/hooks/userDataClothes";

export default function AddClothes() {
  const {
    form,
    setForm,
    clothes,
    handleCreate,
    handleUpdate,
    deleteClothe,
    updateClothe,
    cleanData,
  } = useDataClothes();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const toggleSize = (size) => {
    const sizes = form.sizesAvailable || "";
    const sizeList = sizes.split(",").filter(Boolean);
    const updatedSizes = sizeList.includes(size)
      ? sizeList.filter(s => s !== size)
      : [...sizeList, size];
    setForm(prev => ({
      ...prev,
      sizesAvailable: updatedSizes.join(","),
    }));
  };

  return (
    <div className="add-clothes-container">
      <main className="add-clothes-main">
        <h1 className="add-clothes-title"><span> Add Clothes</span></h1>

        <section className="add-clothes-form-section">
          {/* Imagen */}
          <div className="add-clothes-photo">
            <img src={Clothes} alt="Clothes preview" />
            <button onClick={() => alert("Funcionalidad de imagen en desarrollo")}>
              Add Photo
            </button>
          </div>

          {/* Formulario */}
          <form className="add-clothes-form" onSubmit={form._id ? handleUpdate : handleCreate}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
            />

            {/* Brand */}
            <select name="idBrand" value={form.idBrand} onChange={handleChange} className="custom-select-dropdown">
              <option value="" disabled>Brand</option>
              <option value="Omweear">Omweear</option>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              
            </select>

            {/* Stock */}
            <select name="stock" value={form.stock} onChange={handleChange} className="custom-select-dropdown">
              <option value="" disabled>Stock</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>

            {/* Category */}
            <select name="idCategory" value={form.idCategory} onChange={handleChange} className="custom-select-dropdown">
              <option value="" disabled>Categorie</option>
              <option value="Tops">Tops</option>
              <option value="Leggins">Leggins</option>
              <option value="Short">Short</option>
               <option value="Zapatos">Zapatos</option>
            </select>

            {/* Supplier */}
            <select name="idSupplier" value={form.idSupplier} onChange={handleChange} className="custom-select-dropdown">
              <option value="" disabled>Supplier</option>
              <option value="Alo">Alo</option>
              <option value="Gym">Gym</option>
              <option value="Fits">Fits</option>
            </select>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              className="full-width"
              rows="3"
            ></textarea>

            <div className="sizes">
              {["XS", "S", "M", "L", "XL"].map(size => (
                <button
                  type="button"
                  key={size}
                  className={form.sizesAvailable?.includes(size) ? "selected" : ""}
                  onClick={() => toggleSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <button type="submit" className="submit-btn">
              {form._id ? "Update Clothe" : "Add Clothe"}
            </button>
            {form._id && (
              <button type="button" onClick={cleanData} className="submit-btn cancel-btn">
                Cancel
              </button>
            )}
          </form>
        </section>

        {/* Tabla */}
        <section className="add-clothes-table-section">
          <input type="text" placeholder="Search" className="search-input" />

          <table>
            <thead>
              <tr>
                <th>Name</th><th>Brand</th><th>Categorie</th><th>Stock</th>
                <th>Supplier</th><th>Description</th><th>Image</th><th>Size</th><th>Price</th>
              </tr>
            </thead>
            <tbody>
              {clothes.map((clothe) => (
                <tr key={clothe._id}>
                  <td>{clothe.name}</td>
                  <td>{clothe.idBrand?.name || clothe.idBrand}</td>
                  <td>{clothe.idCategory?.name || clothe.idCategory}</td>
                  <td>{clothe.stock}</td>
                  <td>{clothe.idSupplier?.name || clothe.idSupplier}</td>
                  <td>{clothe.description}</td>
                  <td>{clothe.images || "-"}</td>
                  <td>{clothe.sizesAvailable}</td>
                  <td>${clothe.price}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="table-actions">
            <button className="green" onClick={() => cleanData()}>Add</button>
            <button className="yellow" onClick={() => updateClothe(clothes[0])}>Edit</button>
            <button className="red" onClick={() => deleteClothe(clothes[0]._id)}>Delete</button>
          </div>
        </section>
      </main>
    </div>
  );
}
