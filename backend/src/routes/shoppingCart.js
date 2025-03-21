import express, { Router } from "express";
import shoppingCartController from "../controllers/shoppingCartController.js"
//Router que nos ayuda a color métodos
// que tendrá mi ruta
 
 
//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();
 
 
router.route("/")
.get(shoppingCartController.getCart)
.post(shoppingCartController.createCart)
router.route("/:id")
.put(shoppingCartController.updateCart)
.delete(shoppingCartController.deleteCart);
 
export default router;