import ICountry from "../interfaces/ICountry.js";
import countryModel from "../model/countryModel.js";

class CountryRepo {
  public getAllData = async () => {
    return await countryModel.find();
  };
  public createData = async (data: ICountry) => {
    await countryModel.create(data);
  };
}
export default CountryRepo;
