import axios from "axios";
import {Request,Response,NextFunction} from 'express';

export const geoLocMiddleware = async (req:Request, res:Response, next:NextFunction) => {
  const key = "29f6aafef213de059431ac964c670b6d";
  const ip = "49.249.117.102";
  const response = await axios.get(
    `http://api.ipstack.com/${ip}?access_key=${key}`
  );
  const region = response.data.country_name;
  console.log(response);
  if (region !== "India") {
    return res.json("Unauthorised user");
  }
  next();
};
