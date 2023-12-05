import mongoose from "mongoose";
import playingCountries from "./countriesModel.js";

class Connection {
  private mongoUri: string = "mongodb://127.0.0.1:27017/test";

  public connectDB = (): void => {
    mongoose
      .connect(this.mongoUri)
      .then(() => {
        console.log("MongoDB is connected successfully.");

        this.seedCountries();
      })
      .catch((err: Error) => {
        console.error("MongoDB connection error" + err);
      });
  };

  private seedCountries = async () => {
    await playingCountries.deleteMany({});
    await playingCountries.insertMany([
      { country_name: "india" },
      { country_name: "australia" },
      { country_name: "england" },
    ]);
  };
}
export default Connection;
