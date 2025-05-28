import express from "express";
import logoutcontroller from "../controllers/logoutController.js";

const router = express.Router();

router.route("/").post(logoutcontroller.logout);

export default router;