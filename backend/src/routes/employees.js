//2.crea file de ruta

import express, { Router } from "express";
import employeesController from "../controllers/employeesController.js"
//Router que nos ayuda a color métodos
// que tendrá mi ruta
 
 
//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();
 
 
router.route("/")
.get(employeesController.getEmployees)
.post(employeesController.createEmployees)
router.route("/:id")
.put(employeesController.updateEmployees)
.delete(employeesController.deleteEmployees);
 
export default router;