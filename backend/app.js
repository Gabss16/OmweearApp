import express from "express";
import brands from "./src/routes/brands.js";
import categories from "./src/routes/categories.js";
import custumers from "./src/routes/customers.js";
import discounts from "./src/routes/discounts.js";
import employees from "./src/routes/employees.js";
import paymentMethod from "./src/routes/paymentMethod.js";
import products from "./src/routes/products.js";
import sales from "./src/routes/sales.js";
import shoppingCart from "./src/routes/shoppingCart.js";
import supliers from "./src/routes/suppliers.js";
import wishlist from "./src/routes/wishlist.js";


const app = express();


app.use(express.json());


//Empieza CRUD
//1.definir rutas de funciones
app.use ("/api/brands", brands);
app.use ("/api/categories", categories);
app.use ("/api/custumers", custumers);
app.use ("/api/discounts", discounts);
app.use ("/api/employees", employees);
app.use ("/api/paymentMethod", paymentMethod);
app.use ("/api/products", products);
app.use ("/api/sales", sales);
app.use ("/api/shoppingCart", shoppingCart);
app.use ("/api/supliers", supliers);
app.use ("/api/wishlist", wishlist);






//antes de crud
export default app;