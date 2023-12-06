import { Request, Response } from "express";
import CountryService from "../services/countryService.js";

class CountryController {
  private countryService = new CountryService();
  public getAllData = async (req: Request, res: Response) => {
    const data = await this.countryService.getAllData();
    res.json(data);
  };

  public createData = async(req: Request, res: Response) => {
    const data = req.body;
    await this.countryService.createData(data);
    res.json({"message":"data has been created scuccessfully"})
  };
}
export default CountryController;
