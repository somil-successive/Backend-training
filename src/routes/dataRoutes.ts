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
import { asyncData } from "../controllers/asyncController.js";
import { paramValidationMiddleware } from "../middleware/paramValidationMiddleware.js";

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
  getData
);
dataRouter.post(
  "/post",
  limitingReqMiddleware,
  customHeaderMiddleware({ content: "Html" }),
  customLogsMiddleware,

  postData
);
dataRouter.post("/login", login);
dataRouter.post("/register", dynamicValidationMiddleware, register);
dataRouter.get("/async", asyncData);

export default dataRouter;