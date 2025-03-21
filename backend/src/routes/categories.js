import express, { Router } from "express";
import categoriesControllers from "../controllers/categoriesControllers.js";

// Router () nos ayuda a colocar los métooos
//que tendrá mi ruta

const router = express.Router();

router.route("/")
.get(categoriesControllers.getCategories)
.post(categoriesControllers.createCategories)

router.route("/:id")
.put(categoriesControllers.updateCategories)
.delete(categoriesControllers.deleteCategories);

export default router;
