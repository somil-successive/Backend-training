import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import DataController from "../controllers/dataController.js";
import  customLogsMiddleware  from "../middleware/customLogsMiddleware.js";
import  customHeaderMiddleware  from "../middleware/customHeaderMiddleware.js";
import { limitingReqMiddleware } from "../middleware/limitingReqMiddleware.js";
import  checkNumParamMiddleware  from "../middleware/checkNumParamMiddleware.js";
import { geoLocMiddleware } from "../middleware/geoLocMiddleware.js";
import  dynamicValidationMiddleware  from "../middleware/dynamicValidationMiddleware.js";
import  loginController  from "../controllers/loginController.js";
import registerController from "../controllers/registerController.js";
import { paramValidationMiddleware } from "../middleware/paramValidationMiddleware.js";
import asyncController from '../controllers/asyncController.js'

const dataRouter = express.Router();

dataRouter.get(
  "/get",
  paramValidationMiddleware,
  geoLocMiddleware,
  limitingReqMiddleware,
  customHeaderMiddleware({ content: "Text" }),
  customLogsMiddleware,
  authMiddleware,
  checkNumParamMiddleware,
  new DataController().getData
);
dataRouter.post(
  "/post",
  limitingReqMiddleware,
  customHeaderMiddleware({ content: "Html" }),
  customLogsMiddleware,

  new DataController().postData
);
dataRouter.post("/login", loginController);
dataRouter.post("/register", dynamicValidationMiddleware, registerController);
dataRouter.get("/async", asyncController);

export default dataRouter;
