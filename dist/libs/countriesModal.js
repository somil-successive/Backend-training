import mongoose from "mongoose";
const { Schema } = mongoose;
const countrySchema = new Schema({
    country: String,
    captain: String,
    win: Number,
    loss: Number,
});
const playingCountries = mongoose.model("playingCountries", countrySchema);
export default playingCountries;
