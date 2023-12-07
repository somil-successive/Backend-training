import express from "express";
import CountryController from "../controllers/CountryController.js";
import dynamicValidationMiddleware from "../middleware/dynamicValidationMiddleware.js";

const countryRouter = express.Router();
const countryController = new CountryController();

countryRouter.get("/getcountry", countryController.getAllData);
countryRouter.post(
  "/create",
  dynamicValidationMiddleware,
  countryController.createData
);
countryRouter.post("/update", countryController.updateDataByName);

export default countryRouter;
