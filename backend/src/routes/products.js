import express from "express";
import productsControllers from "../controllers/productController.js";
import multer from "multer";


const router = express.Router();

const upload = multer({dest: "public/"})

// Rutas
router.route("/")
  .get(productsControllers.getAllProducts)
  .post(upload.single("imagen"),productsControllers.postProducts);

router.route("/:id")
  .get(productsControllers.getProductById)
  .put(upload.single("imagen"),productsControllers.putProducts)
  .delete(productsControllers.deleteProducts);

export default router;
