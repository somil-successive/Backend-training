import jwt from "jsonwebtoken";
import createError from "http-errors";

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
  }
};
