import express from "express";
import suppliersControllers from "../controllers/supliersController.js";

const router = express.Router();

router.route("/")
.get(suppliersControllers.getSuppliers)
.post(suppliersControllers.postSuppliers)

router.route("/:id")
.put(suppliersControllers.putSuppliers)
.delete(suppliersControllers.postSuppliers);

export default router;