import express from "express";
import customersControllers from "../controllers/customersControllers.js"
import multer from "multer";

//Router nos ayuda a color los métodos que tendrá mi ruta
const upload = multer({dest: "public/"})
const router = express.Router();

router.route("/")
.get(customersControllers.getCustomers)
.post(upload.single("image"),customersControllers.createCustomers)

router.route("/:id")
.put(upload.single("image"),customersControllers.updateCustomers)
.delete(customersControllers.deleteCustomers);

export default router;