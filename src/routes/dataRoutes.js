import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getData, postData } from "../controllers/dataController.js";
import { validationMiddleware } from "../middleware/validationMiddleware.js";
import { login } from "../controllers/loginController.js";
const dataRouter = express.Router();

dataRouter.get("/get", authMiddleware, getData);
dataRouter.post("/post", authMiddleware, postData);
dataRouter.post("/login", validationMiddleware, login);

export default dataRouter;
