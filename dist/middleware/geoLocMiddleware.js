var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import createError from "http-errors";
class GeoLocationMiddleware {
    constructor() {
        this.key = "29f6aafef213de059431ac964c670b6d";
        this.ip = "49.249.117.102";
        this.geoLocMiddleware = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const response = yield axios.get(`http://api.ipstack.com/${this.ip}?access_key=${this.key}`);
            const region = response.data.country_name;
            console.log(response);
            if (region !== "India") {
                return next(createError(401, "Unauthorised User"));
            }
            next();
        });
    }
}
export default new GeoLocationMiddleware().geoLocMiddleware;
