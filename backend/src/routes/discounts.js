import express from "express";
import discountsControllers from "../controllers/discountsControllers.js";

const router = express.Router();

router.route("/")
.get(discountsControllers.getDiscounts)
.post(discountsControllers.postDiscounts)

router.route("/:id")
.put(discountsControllers.putDiscounts)
.delete(discountsControllers.postDiscounts);

export default router;