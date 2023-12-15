import express from "express";
import Controller from "./Controller.js";
import dynamicValidationMiddleware from "../../middleware/dynamicValidationMiddleware.js";

const bRouter = express.Router();
const controller = new Controller();
bRouter.get("/get", controller.getAll);
bRouter.post("/create", controller.create);
bRouter.get("/getbytitle", controller.getByTitle);
bRouter.delete("/delete/:title", controller.deleteByTitle);
bRouter.patch("/update/:title", controller.updateByTitle);
bRouter.get("/getbyid/:id", controller.getById);
bRouter.get("/getbycategories/:categories", controller.getByCategory);
bRouter.get("/search/:value", controller.search);
// bRouter.get("/search", controller.search);


export default bRouter;
