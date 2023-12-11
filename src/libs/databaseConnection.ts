import mongoose from "mongoose";
import { configurations } from "../utils/config.js";

class Connection {
  public connectDB = async (): Promise<void> => {
    try {
      await mongoose.connect(configurations.mongoUri);

      console.log("MongoDB is connected successfully.");
    } catch (err) {
      console.error("MongoDB connection error" + err);
    }
  };
}
export default Connection;
