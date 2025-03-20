import express, { Router } from "express";
import brandsControllers from "../controllers/brandsControllers.js";

// Router () nos ayuda a colocar los métooos
//que tendrá mi ruta

const router = express.Router();

router.route("/")
.get(brandsControllers.getbrands)
.post(brandsControllers.createbrands)

router.route("/:id")
.put(brandsControllers.updatebrands)
.delete(brandsControllers.deletebrands);

export default router;