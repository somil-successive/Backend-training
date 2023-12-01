export const customHeaderMiddleware = (customHeader) => {
  try{
  return (req, res, next) => {
    res.set(customHeader);
    next();
  };
}catch(error){
  error.message="Invalid Headers"
  next(error);

}
};
