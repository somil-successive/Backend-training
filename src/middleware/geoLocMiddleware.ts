import axios, { AxiosResponse } from "axios";
import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import { IResponse } from "../interface/IResponse";
import { configurations } from "../utils/config";

export const geoLocMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const key = configurations.key;
  const ip = configurations.ip;
  const response: AxiosResponse = await axios.get(
    `http://api.ipstack.com/${ip}?access_key=${key}`
  );
  const data: IResponse = response.data;
  const { country_code } = data;
  const region: string = country_code;
  if (region !== "IN") {
    next(createHttpError(401, "Unauthorised User"));
  }
  next();
};
