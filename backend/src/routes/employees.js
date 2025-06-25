import express from "express";
import employeesController from "../controllers/employeesController.js"
import multer from "multer";

//Router nos ayuda a color los métodos que tendrá mi ruta
const upload = multer({dest: "public/"})
const router = express.Router();
 
router.route("/")
.get(employeesController.getEmployees)
.post(upload.single("image"),employeesController.createEmployees)

router.route("/:id")
.put(upload.single("image"),employeesController.updateEmployees)
.delete(employeesController.deleteEmployees);
 
export default router;