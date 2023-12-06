import createHttpError from "http-errors";
let count = 0;
const limit = 5;
let currReqTime, initialReqTime;
export const limitingReqMiddleware = (req, res, next) => {
  try {
    if (count === 0) {
      initialReqTime = new Date().getSeconds();
      currReqTime = new Date().getSeconds();
    } else {
      currReqTime = new Date().getSeconds();
      if (currReqTime < initialReqTime) currReqTime += 59;
    }
    if (count < limit && currReqTime <= initialReqTime + 5) {
      count++;
      next();
    } else if (currReqTime > initialReqTime + 5) {
      count = 0;
      next();
    } else {
     next( createHttpError(429,"Limit Exceeds"));
     
    }
  } catch (error) {
    next( createHttpError(429,"Limit Exceeds"));
  }
};
