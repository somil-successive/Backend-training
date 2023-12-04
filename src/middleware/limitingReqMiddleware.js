let count = 0;
let limit = 5;
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
      throw new Error("Limit Exceeds");
    }
  } catch (error) {
    res.status(429);
    next(error);
  }
};
