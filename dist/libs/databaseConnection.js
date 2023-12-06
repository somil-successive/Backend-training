var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
import playingCountries from "./countriesModel.js";
class Connection {
    constructor() {
        this.mongoUri = "mongodb://127.0.0.1:27017/test";
        this.connectDB = () => {
            mongoose
                .connect(this.mongoUri)
                .then(() => {
                console.log("MongoDB is connected successfully.");
                this.seedCountries();
            })
                .catch((err) => {
                console.error("MongoDB connection error" + err);
            });
        };
        this.seedCountries = () => __awaiter(this, void 0, void 0, function* () {
            yield playingCountries.deleteMany({});
<<<<<<< HEAD
            yield playingCountries.insertMany([{ country_name: "india" }, { country_name: "australia" }, { country_name: "england" }]);
=======
            yield playingCountries.insertMany([
                { country_name: "india" },
                { country_name: "australia" },
                { country_name: "england" },
            ]);
>>>>>>> 7b0fba7b7d1ec4f3c89b1680b880a3e9dbe3f46d
        });
    }
}
export default Connection;
