import axios from "axios";
export const geoLocMiddleware = async (req, res, next) => {
  try {
    const key = "29f6aafef213de059431ac964c670b6d";
    const ip = "49.249.117.102";
    const response = await axios.get(
      `http://api.ipstack.com/${ip}?access_key=${key}`
    );
    const region = response.data.country_code;
    if (region !== "IN") {
      res.status(401);
      throw new Error("Access not allowed");
    }
    next();
  } catch (err) {
    next(err);
  }
};
