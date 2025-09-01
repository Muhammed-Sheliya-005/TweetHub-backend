import express from "express";
import authcontrollers from "../controllers/auth.controller.js"

const router = express.Router();

router.post("/signup", authcontrollers.signup);
router.post("/login", authcontrollers.login);

export default router;


