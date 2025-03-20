import express, { Router } from "express";
import categoriesControllers from "../controllers/categoriesControllers.js";

// Router () nos ayuda a colocar los métooos
//que tendrá mi ruta

const router = express.Router();

router.route("/")
.get(categoriesControllers.getcategories)
.post(categoriesControllers.createcategories)

router.route("/:id")
.put(categoriesControllers.updatecategories)
.delete(categoriesControllers.deletecategories);

export default router;
