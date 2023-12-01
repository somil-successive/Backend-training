export const customHeaderMiddleware = (customHeader) => {
  try{
  return (req, res, next) => {

    if(Object.keys(customHeader).length===0){
      throw new Error('Empty header')
    }
    res.set(customHeader);
    console.log("Header has been set successfully")
    next();
  };
}catch(error){
  next(error);
}
};
