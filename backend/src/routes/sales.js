import express, { Router } from "express";
import salesController from "../controllers/salesController.js"
//Router que nos ayuda a color métodos
// que tendrá mi ruta
 
 
//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();
 
 
router.route("/")
.get(salesController.getSales)
router.post("/add", salesController.createSale);

router.put("/update-status/:id", salesController.updateStatus);

router.route("/:id")
.put(salesController.updateSale)
.delete(salesController.deleteSale);

 
export default router;