import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getData, postData } from "../controllers/dataController.js";
import { customLogsMiddleware } from "../middleware/customLogsMiddleware.js";
import { customHeaderMiddleware } from "../middleware/customHeaderMiddleware.js";
import { limitingReqMiddleware } from "../middleware/limitingReqMiddleware.js";

const dataRouter = express.Router();

dataRouter.get(
  "/get",
  limitingReqMiddleware,
  customHeaderMiddleware({ content: "Text" }),
  customLogsMiddleware,
  authMiddleware,
  getData
);
dataRouter.post(
  "/post",
  limitingReqMiddleware,
  customHeaderMiddleware({ content: "Html" }),
  customLogsMiddleware,
  authMiddleware,
  postData
);

export default dataRouter;
