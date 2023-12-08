import express from "express";
import Controller from "./Controller.js";

const bRouter = express.Router();
const controller = new Controller();
bRouter.get("/get", controller.getAll);
bRouter.post("/create", controller.create);

export default bRouter;
