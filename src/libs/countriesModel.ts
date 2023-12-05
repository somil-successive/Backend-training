import mongoose from "mongoose";
const { Schema } = mongoose;

const countrySchema = new Schema({
  country_name: { type: String, required: true },
});

const playingCountries = mongoose.model("playingCountries", countrySchema);
export default playingCountries;
