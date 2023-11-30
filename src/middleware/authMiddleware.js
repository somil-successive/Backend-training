import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized - Token not provided." });
  }
  try {
    const decodedUser = jwt.verify(token, "123");
    req.user = decodedUser;
    next();
  } catch (error) {
    // return res.status(401).json({ message: "Unauthorized - Invalid token" });
    next(error);
  }
};
