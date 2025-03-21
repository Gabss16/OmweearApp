import express, { Router } from "express";
import salesController from "../controllers/salesController.js"
//Router que nos ayuda a color métodos
// que tendrá mi ruta
 
 
//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();
 
 
router.route("/")
.get(salesController.getSales)
.post(salesController.createSale)
router.route("/:id")
.put(salesController.updateSale)
.delete(salesController.deleteSale);
 
export default router;