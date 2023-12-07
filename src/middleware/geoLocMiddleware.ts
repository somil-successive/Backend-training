import axios, { AxiosResponse } from "axios";
import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import IResponse from "../interface/IResponse";

export const geoLocMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const key = "29f6aafef213de059431ac964c670b6d";
  const ip = "49.249.117.102";
  const response: AxiosResponse = await axios.get(
    `http://api.ipstack.com/${ip}?access_key=${key}`
  );
  const { country_code }: IResponse = response.data;
  const region: string = country_code;
  if (region !== "IN") {
    next(createHttpError(401, "Unauthorised User"));
  }
  next();
};
