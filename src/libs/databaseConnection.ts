import mongoose from "mongoose";
import { configurations } from "../utils/config";
import logger from "../utils/logger";

class Connection {
  public connectDB = async (): Promise<void> => {
    try {
      await mongoose.connect(configurations.mongoUri);
      logger.info("MongoDB is connected successfully.");
      // console.log("MongoDB is connected successfully.");
    } catch (err) {
      console.error("MongoDB connection error" + err);
    }
  };

  public disconnectDB = async (): Promise<void> => {
    try {
      await mongoose.disconnect();
    } catch (err) {
      console.error("MongoDB disconnect error" + err);
    }
  };
}
export default Connection;
