import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { getData, postData } from "../controllers/dataController";
import { customLogsMiddleware } from "../middleware/customLogsMiddleware";
import { customHeaderMiddleware } from "../middleware/customHeaderMiddleware";
import { limitingReqMiddleware } from "../middleware/limitingReqMiddleware";
import { checkNumParamMiddleware } from "../middleware/checkNumParamMiddleware";
import { geoLocMiddleware } from "../middleware/geoLocMiddleware";
import { dynamicValidationMiddleware } from "../middleware/dynamicValidationMiddleware";
import { login } from "../controllers/loginController";
import { register } from "../controllers/registerController";
import { asyncData } from "../controllers/asyncController";
import { paramValidationMiddleware } from "../middleware/paramValidationMiddleware";
import { paramController } from "../controllers/paramController";

export const dataRouter = express.Router();

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
dataRouter.post("/login",dynamicValidationMiddleware, login);
dataRouter.post("/register", dynamicValidationMiddleware, register);
dataRouter.get("/async", asyncData);
dataRouter.get("/:id", paramValidationMiddleware, paramController);


