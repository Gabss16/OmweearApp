import express from "express"
import registerCustomerController from "../controllers/registerCustomersController.js";
import multer from "multer";

const upload = multer({ dest: 'uploads/' })
const router = express.Router()

router.route("/").post(upload.single("profilePhoto"), registerCustomerController.registerCustomer)
router.route("/verifyCodeEmail").post(registerCustomerController.verifyCodeEmail)

export default router;