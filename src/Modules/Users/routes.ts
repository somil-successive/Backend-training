import express from "express";
import dynamicValidationMiddleware from "../../middleware/dynamicValidationMiddleware.js";
import Controller from "./Controller.js";
import authMiddleware from "../../middleware/authMiddleware.js";


const router = express.Router();

const userController = new Controller();

router.get("/getusers", userController.getAllUsers);
router.post(
  "/register",
  dynamicValidationMiddleware,
  userController.createUser
);
router.get("/get/:name", userController.getByName);
router.get("/getuser/:email", userController.getByEmail);
router.delete("/delete/:name", userController.deleteByName);
router.post("/login", authMiddleware, userController.login);
router.patch("/update/:id", userController.update);


export default router;
