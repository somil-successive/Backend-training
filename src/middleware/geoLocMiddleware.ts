import axios from "axios";
import { Request, Response, NextFunction } from "express";

class GeoLocationMiddleware {
  private key = "29f6aafef213de059431ac964c670b6d";
  private ip = "49.249.117.102";

  public geoLocMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const response = await axios.get(
      `http://api.ipstack.com/${this.ip}?access_key=${this.key}`
    );
    const region = response.data.country_name;
    console.log(response);
    if (region !== "India") {
      res.json("Unauthorised user");
    }
    next();
  };
}
export default new GeoLocationMiddleware().geoLocMiddleware;
