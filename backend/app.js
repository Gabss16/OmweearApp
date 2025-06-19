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
import registerEmployeesRoutes from "./src/routes/RegisterEmployees.js"
import loginRoutes from "./src/routes/login.js"
import logoutRoutes from "./src/routes/logout.js"
import cookieParser from "cookie-parser";
import registerCustomerRoutes from "./src/routes/RegisterCustomers.js"
import recoveryPasswordRoutes from "./src/routes/recoveryPassword.js"
import { validateAuthToken } from "./src/middleware/validateAuthToken.js";
import multer from "multer";
import { upload } from "../middlewares/multer.js";
import productsControllers from "../controllers/productsControllers.js";

router.post("/products", upload.single("imagen"), productsControllers.postProducts);
router.put("/products/:id", upload.single("imagen"), productsControllers.putProducts);

const storage = multer.diskStorage({
  destination: "uploads/", // carpeta donde se guardan
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

export const upload = multer({ storage });

import cors from "cors";

const app = express();

//Postman acepte guardar librerias
app.use(cookieParser())


app.use(
    cors({
      origin: "http://localhost:5173", // Dominio del cliente
      credentials: true, // Permitir envío de cookies y credenciales
    })
  );

app.use(express.json());

//Empieza CRUD
//1.definir rutas de funciones

app.use ("/api/brands", brands);
app.use ("/api/categories", categories);
app.use ("/api/custumers", custumers);
app.use ("/api/discounts", discounts);
app.use ("/api/employees", employees);
app.use ("/api/paymentMethod", paymentMethod);
//app.use("/api/products", validateAuthToken (["admin", "employee"]), productRoutes)
app.use ("/api/products", products);
app.use ("/api/sales", sales);
app.use ("/api/shoppingCart", shoppingCart);
app.use ("/api/supliers", supliers);
app.use ("/api/wishlist", wishlist);

app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);
app.use("/api/registerCustomers", registerCustomerRoutes);
//app.use("/api/registrerEmployees", validateAuthToken (["admin"]), registerEmployeesRoutes);
app.use("/api/registerEmployees", registerEmployeesRoutes);
app.use("/api/recoveryPassword", recoveryPasswordRoutes);

export default app;