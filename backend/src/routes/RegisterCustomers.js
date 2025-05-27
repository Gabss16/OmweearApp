import express from "express"
import registerCustomerController from "../controllers/registerCustomersController.js";

const router = express.Router()

router.route("/").post(registerCustomerController.registerCustomer)
router.route("/verifyCodeEmail").post(registerCustomerController.verifyCodeEmail)

export default router;