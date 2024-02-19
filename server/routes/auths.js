import express from"express";
import express, { signup } from "../controllers/auth";

const router = express.Router();

router.post("/signup",signup)

export default router;