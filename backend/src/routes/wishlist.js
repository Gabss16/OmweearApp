import express from "express";
import wishListControllers from "../controllers/wislistController.js";

const router = express.Router();

router.route("/")
.get(wishListControllers.getWishlist)
.post(wishListControllers.postWishlist)

router.route("/:id")
.put(wishListControllers.putWishlist)
.delete(wishListControllers.postWishlist);

export default router;