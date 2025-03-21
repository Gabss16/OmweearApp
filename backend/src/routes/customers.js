import express from "express";
import customersControllers from "../controllers/customersControllers.js"
//Router que nos ayuda a color métodos
// que tendrá mi ruta


//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();


router
.route("/")
.get(customersControllers.getCustomers)
.post(customersControllers.createCustomers)

router
.route("/:id")
.put(customersControllers.updateCustomers)
.delete(customersControllers.deleteCustomers);

export default router;