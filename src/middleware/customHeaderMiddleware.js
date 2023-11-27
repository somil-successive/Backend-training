export const customHeaderMiddleware = (customHeader) => {
  return (req, res, next) => {
    res.set(customHeader);
    next();
  };
};
