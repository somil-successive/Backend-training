import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

const userController = new UserController();

router.get("/getusers", userController.getAllUsers);
router.post("/createuser", userController.createUser);

export default router;
