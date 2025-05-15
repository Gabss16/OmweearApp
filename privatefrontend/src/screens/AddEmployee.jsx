
import Navbar from '../components/Navbar';
import '../screens/AddEmployee.css';

export default function AddEmployee() {
  return (
    <div className="add-employee-container">
     
      <main className="add-employee-main">
        <h1 className="add-employee-title"><span> Add Employee</span></h1>
        
        <section className="add-employee-form-section">
          {/* Imagen */}
          <div className="add-employee-photo">
            <img
              src="https://i.pinimg.com/736x/b4/f2/a3/b4f2a3e6e84314b8dd922cd7c3df0b07.jpg"
              alt="employee preview"
            />
            <button>Add Photo</button>
          </div>

          {/* Formulario */}
          <form className="add-employee-form">
            <input type="text" placeholder="Name" />
            <input type="Email" placeholder="Email" />
            <input type="Password" placeholder="Password" />
             <input type="Birthday" placeholder="Birthday" />
            <input type="HireDate" placeholder="HireDate" />
            <input type="DUI" placeholder="DUI" />
            <input type="ISSS" placeholder="ISSS" />
            <input type="Phone Number" placeholder="Phone Number" />

        
{/* Desplegable para "Charger" */}
<select className="custom-select-dropdown" defaultValue="">
  <option value="" disabled>Charger</option>
  <option value="Manager">Manager</option>
  <option value="shop assistant">shop assistant</option>
</select>

{/* Desplegable para "Gender" */}
<select className="custom-select-dropdown" defaultValue="">
  <option value="" disabled>Gender</option>
  <option value="Female">Female</option>
  <option value="Male">Male</option>
  <option value="Others">Other</option>
</select>
           
            <button type="submit" className="submit-btn">Agree </button>
          </form>
        </section>

        {/* Tabla */}
        <section className="add-employee-table-section">
          <input type="text" placeholder="Search" className="search-input" />

          <table>
            <thead>
              <tr>
                <th>Name</th><th>Email</th><th>Charge</th><th>Gender</th>
                <th>Phone Number</th><th>Birthday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>José Leví</td><td>levi@gmail.com</td><td>Admin</td><td>Male</td>
                <td>7789-9030</td><td>16/02/2007</td>
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
