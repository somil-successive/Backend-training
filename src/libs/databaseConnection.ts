import mongoose from "mongoose";

class Connection {
  private mongoUri: string = "mongodb://127.0.0.1:27017/test";

  public connectDB = async (): Promise<void> => {
    try {
      await mongoose.connect(this.mongoUri);

      console.log("MongoDB is connected successfully.");
    } catch (err) {
      console.error("MongoDB connection error" + err);
    }
  };
}
export default Connection;
