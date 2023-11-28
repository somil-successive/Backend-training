import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getData, postData } from "../controllers/dataController.js";
import { customLogsMiddleware } from "../middleware/customLogsMiddleware.js";
import { customHeaderMiddleware } from "../middleware/customHeaderMiddleware.js";
import { limitingReqMiddleware } from "../middleware/limitingReqMiddleware.js";
import { checkNumParamMiddleware } from "../middleware/checkNumParamMiddleware.js";
import { geoLocMiddleware } from "../middleware/geoLocMiddleware.js";
import { dynamicValidationMiddleware } from "../middleware/dynamicValidationMiddleware.js";
import { login } from "../controllers/loginController.js";
import { register } from "../controllers/registerController.js";

const dataRouter = express.Router();

dataRouter.get(
  "/get",
  geoLocMiddleware,
  limitingReqMiddleware,
  customHeaderMiddleware({ content: "Text" }),
  customLogsMiddleware,
  authMiddleware,
  checkNumParamMiddleware,
  getData
);
dataRouter.post(
  "/post",
  limitingReqMiddleware,
  customHeaderMiddleware({ content: "Html" }),
  customLogsMiddleware,
  postData
);
dataRouter.post(
  "/login",
  dynamicValidationMiddleware,
  login
);
dataRouter.post(
  "/register",
  dynamicValidationMiddleware,
  register
);

export default dataRouter;
