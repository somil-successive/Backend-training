import axios from "axios";
import { Request, Response, NextFunction } from "express";
import { configurations } from "../utils/config";
import createHttpError from "http-errors";
import { IResponse } from "../interface/IResponse";

class GeoLocationMiddleware {
  private key = configurations.key;
  private ip = configurations.ip;

  public geoLocMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const response = await axios.get(
      `http://api.ipstack.com/${this.ip}?access_key=${this.key}`
    );
    const data: IResponse = response.data;
  const { country_code } = data;
  const region: string = country_code;
  if (region !== "IN") {
    next(createHttpError(401, "Unauthorised User"));
  }
    next();
  };
}
export default new GeoLocationMiddleware().geoLocMiddleware;
