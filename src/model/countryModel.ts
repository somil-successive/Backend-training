import mongoose from "mongoose";
import ICountry from "../interfaces/ICountry.js";

const countrySchema = new mongoose.Schema<ICountry>({
  name: { type: String },
  captain: { type: String },
});

const countryModel= mongoose.model("countries",countrySchema);
export default countryModel;