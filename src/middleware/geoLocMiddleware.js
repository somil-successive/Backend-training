import axios from "axios";
export const geoLocMiddleware = async (req, res, next) => {
  try {
    const key = "29f6aafef213de059431ac964c670b6d";
    const ip = "49.249.117.102";
    const response = await axios.get(
      `http://api.ipstack.com/${ip}?access_key=${key}`
    );
    const region = response.data.country_name;
    console.log(response);
    if (region !== "India") {
      res.status(401);
      throw new Error("Unauthorised user");
    }
    next();
  } catch (err) {
    next(err);
  }
};
