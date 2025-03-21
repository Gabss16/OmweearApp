import express, { Router } from "express";
import PaymentMethodController from "../controllers/paymentMethodControllers.js"
//Router que nos ayuda a color métodos
// que tendrá mi ruta
 
 
//Router nos ayuda a color los métodos que tendrá mi ruta
const router = express.Router();
 
 
router.route("/")
.get(PaymentMethodController.getPaymentMethod)
.post(PaymentMethodController.createPaymentMethod)
router.route("/:id")
.put(PaymentMethodController.updatePaymentMethod)
.delete(PaymentMethodController.deletePaymentMethod);
 
export default router;