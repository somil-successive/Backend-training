export const customHeaderMiddleware = (customHeader) => {
  try {
    return (req, res, next) => {
      if (Object.keys(customHeader).length === 0) {
        throw new Error("No custom header added");
      }
      res.set(customHeader);
      next();
    };
  } catch (error) {
    next(error);
  }
};
