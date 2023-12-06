import mongoose from "mongoose";
import playingCountries from "./countriesModel.js";

class Connection {
  private mongoUri: string = "mongodb://127.0.0.1:27017/test";

  public connectDB = async (): Promise<void> => {
    try {
      await mongoose.connect(this.mongoUri);

      console.log("MongoDB is connected successfully.");

      this.seedCountries();
    } catch (err) {
      console.error("MongoDB connection error" + err);
    }
  };

  private seedCountries = async () => {
    await playingCountries.insertMany({ country_name: "india" });
  };
}
export default Connection;
