import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getData, postData } from "../controllers/dataController.js";

const dataRouter = express.Router();

dataRouter.get("/get", authMiddleware, getData);
dataRouter.post("/post", authMiddleware, postData);

export default dataRouter;
