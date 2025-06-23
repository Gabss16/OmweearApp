import express from "express";
import loginController from "../controllers/loginController.js";

const router = express.Router();

router.route("/").post(loginController.login);
router.get("/verify", loginController.verify);

export default router;