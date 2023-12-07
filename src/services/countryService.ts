import ICountry from "../interfaces/ICountry.js";
import CountryRepo from "../repositories/countryRepo.js";

class CountryService {
  private repo: CountryRepo;
  constructor() {
    this.repo = new CountryRepo();
  }
  public getAllData = async () => {
    return await this.repo.getAllData();
  };
  public createData = async (data: ICountry) => {
    await this.repo.createData(data);
  };
  public updateDataByName = async (name:ICountry, newData:ICountry) => {
    await this.repo.updateDataByName(name, newData);
  };
}
export default CountryService;
