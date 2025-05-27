import express from "express";
import productsControllers from "../controllers/productController.js";

const router = express.Router();

router.route("/")
.get(productsControllers.getProducts)
.post(productsControllers.postProducts)

router.route("/:id")
.put(productsControllers.putProducts)
.delete(productsControllers.deleteProducts);

export default router;