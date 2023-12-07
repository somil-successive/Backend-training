import createHttpError from "http-errors";
export const limitingReqMiddleware = (req, res, next) => {
    let count = 0;
    let limit = 5;
    let currReqTime, initialReqTime = 0;
    if (count === 0) {
        initialReqTime = new Date().getSeconds();
        currReqTime = new Date().getSeconds();
    }
    else {
        currReqTime = new Date().getSeconds();
        if (currReqTime < initialReqTime)
            currReqTime += 59;
    }
    if (count < limit && currReqTime <= initialReqTime + 5) {
        count++;
        next();
    }
    else if (currReqTime > initialReqTime + 5) {
        count = 0;
        next();
    }
    else {
        next(createHttpError(429, "Limit Exceeds"));
    }
};
