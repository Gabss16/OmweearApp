// routes/cart.js
import express from "express";
import shoppingCartController from "../controllers/shoppingCartController.js";
const router = express.Router();

router.get("/:userId", shoppingCartController.getCart);
router.post("/add", shoppingCartController.addToCart);
router.delete("/remove", shoppingCartController.removeFromCart);
router.delete("/delete/:id", shoppingCartController.deleteCart);


export default router;
