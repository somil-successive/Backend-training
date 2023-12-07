import ICountry from "../interfaces/ICountry.js";
import countryModel from "../model/countryModel.js";

class CountryRepo {
  public getAllData = async () => {
    return await countryModel.find();
  };
  public createData = async (data: ICountry) => {
    await countryModel.create(data);
  };
  public updateDataByName = async (name: ICountry, newData: ICountry) => {
    await countryModel.updateOne(
      { name: name },
      {
        $set: {
          captain: newData.captain,
        },
      }
    );
  };
}
export default CountryRepo;
