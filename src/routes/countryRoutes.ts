import express from "express";
import CountryController from "../controllers/CountryController.js";

const countryRouter = express.Router();
const countryController = new CountryController();

countryRouter.get("/getcountry", countryController.getAllData);
countryRouter.post("/create", countryController.createData);
export default countryRouter;
