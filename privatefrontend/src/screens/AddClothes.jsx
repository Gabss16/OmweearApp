
import Clothes from "../images/clothes.jpg"
import '../screens/AddClothes.css';

export default function AddClothes() {
  return (
    <div className="add-clothes-container">
      
      <main className="add-clothes-main">
        <h1 className="add-clothes-title"><span> Add Clothes</span></h1>
        
        <section className="add-clothes-form-section">
          {/* Imagen */}
          <div className="add-clothes-photo">
            <img
              src={Clothes}
              alt="Clothes preview"
            />
            <button>Add Photo</button>
          </div>

          {/* Formulario */}
          <form className="add-clothes-form">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Price" />

            {/* Desplegable para "Brand" */}
            <select className="custom-select-dropdown" defaultValue="">
              <option value="" disabled>Brand</option>
              <option value="Omweear">Omweear</option>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
            </select>

            {/* Desplegable para "Stock" */}
            <select className="custom-select-dropdown" defaultValue="">
              <option value="" disabled>Stock</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>

            {/* Desplegable para "Categoria" */}
            <select className="custom-select-dropdown" defaultValue="">
              <option value="" disabled>Categorie</option>
              <option value="Tops">Tops</option>
              <option value="Leggins">Leggins</option>
              <option value="Short">Short</option>
            </select>

            {/* Desplegable para "Supplier" */}
            <select className="custom-select-dropdown" defaultValue="">
              <option value="" disabled>Supplier</option>
              <option value="Alo">Alo</option>
              <option value="Gym">Gym</option>
              <option value="Fits">Fits</option>
            </select>           

            <textarea placeholder="Description" className="full-width" rows="3"></textarea>

            <div className="sizes">
              {["XS", "S", "M", "L", "XL"].map(size => (
                <button type="button" key={size}>{size}</button>
              ))}
            </div>

            <button type="submit" className="submit-btn">Add Clothe</button>
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
              <tr>
                <td>Top</td><td>Omweear</td><td>Ladys</td><td>99</td>
                <td>Cerion</td><td>Tururu</td><td>Oj.jpg</td><td>M</td><td>$22.00</td>
              </tr>
            </tbody>
          </table>

          <div className="table-actions">
            <button className="green">Add</button>
            <button className="yellow">Edit</button>
            <button className="red">Delete</button>
          </div>
        </section>
      </main>
    </div>
  );
}
