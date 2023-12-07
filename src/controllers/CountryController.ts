import { Request, Response } from "express";
import CountryService from "../services/countryService.js";

class CountryController {
  private countryService = new CountryService();
  public getAllData = async (req: Request, res: Response) => {
    const data = await this.countryService.getAllData();
    res.json(data);
  };

  public createData = async (req: Request, res: Response) => {
    const data = req.body;
    await this.countryService.createData(data);
    res.json({ message: "data has been created scuccessfully" });
  };
  public updateDataByName = async (req: Request, res: Response) => {
    const newData = req.body;
    const name = newData.name;
    await this.countryService.updateDataByName(name, newData);
    res.json({ message: "data has been updated successfully" });
  };
}
export default CountryController;
