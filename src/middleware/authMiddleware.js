import jwt from "jsonwebtoken";
import createError from "http-errors";
import { configurations } from "../utils/config.js";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    next(createError(403, "Unauthorized - Token not provided."));
  }
  try {
    jwt.verify(token, "123", (err) => {
      if (err) {
        next(createError(401, "Unauthorized -Invalid token"));
      }
    });
    next();
  } catch (error) {
    next(createError(401, "Unauthorized -Invalid token"));
    return res
      .status(401)
      .json({ message: "Unauthorized - Token not provided." });
  }
};
