import express from "express";
import productsControllers from "../controllers/productController.js";

const router = express.Router();

// Rutas
router.route("/")
  .get(productsControllers.getAllProducts)
  .post(productsControllers.postProducts);

router.route("/:id")
  .get(productsControllers.getProductById)
  .put(productsControllers.putProducts)
  .delete(productsControllers.deleteProducts);

export default router;
