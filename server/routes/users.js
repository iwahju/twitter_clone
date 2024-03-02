import express from "express";
import { getUser, update, deleteUser,follow } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";


const router = express.Router();

//update user
router.put("/:id",verifyToken, update);


// get user 
router.get("/find/:id", getUser);


// delete user
router.delete("/:id", verifyToken,deleteUser);

// follow
router.put("/follow/:id",verifyToken,follow)
export default router;