import express from "express";
import dynamicValidationMiddleware from "../../middleware/dynamicValidationMiddleware.js";
import Controller from "./Controller.js";

const router = express.Router();

const userController = new Controller();

router.get("/getusers", userController.getAllUsers);
router.post(
  "/register",
  dynamicValidationMiddleware,
  userController.createUser
);

export default router;
