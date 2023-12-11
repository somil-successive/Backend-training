import express from "express";
import Controller from "./Controller.js";
import dynamicValidationMiddleware from "../../middleware/dynamicValidationMiddleware.js";

const bRouter = express.Router();
const controller = new Controller();
bRouter.get("/get", controller.getAll);
bRouter.post("/create", dynamicValidationMiddleware, controller.create);
bRouter.get("/getbytitle", controller.getByTitle);
bRouter.get("/delete/:title", controller.deleteByTitle);
bRouter.post("/update/:title", controller.updateByTitle);

export default bRouter;
