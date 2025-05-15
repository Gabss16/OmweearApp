
import Category from "../images/category.jpg"
import '../screens/AddCategory.css';

export default function AddCategory() {
  return (
    <div className="add-category-container">
      
      <main className="add-category-main">
        <h1 className="add-category-title"><span> Add Categories</span></h1>
        
        <section className="add-category-form-section">
          {/* Imagen */}
          <div className="add-category-photo">
            <img
              src={Category}
              alt="Category preview"
            />
            <button>Add Photo</button>
          </div>

          {/* Formulario */}
          <form className="add-category-form">
            <input type="text" placeholder="Name" />
            <textarea placeholder="Description" className="full-width" rows="3"></textarea>
       
    
            <button type="submit" className="submit-btn">Add Category</button>
          </form>
        </section>

        {/* Tabla */}
        <section className="add-category-table-section">
          <input type="text" placeholder="Search" className="search-input" />

          <table>
            <thead>
              <tr>
                <th>Name</th><th>Description</th><th>Image</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Top</td><td>Tururu</td><td>Oj.jpg</td>
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
