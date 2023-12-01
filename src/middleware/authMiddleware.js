import jwt from "jsonwebtoken";
import { configurations} from "../utils/config.js";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized - Token not provided." });
  }
  try {
    const decodedUser = jwt.verify(token, configurations.secretKey);
    req.user = decodedUser;
    next();
  } catch (error) {
    error.message = "invalid token"
    next(error)
  }
};
