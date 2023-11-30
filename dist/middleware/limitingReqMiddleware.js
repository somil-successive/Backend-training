export const limitingReqMiddleware = (req, res, next) => {
    let count = 0;
    let limit = 5;
    let time, time1 = 0;
    if (count === 0) {
        time1 = new Date().getSeconds();
        time = new Date().getSeconds();
    }
    else {
        time = new Date().getSeconds();
        if (time < time1)
            time += 59;
    }
    if (count < limit && time <= time1 + 5) {
        count++;
        next();
    }
    else if (time > time1 + 5) {
        count = 0;
        next();
    }
    else {
        res.status(429).send("Too many requests");
    }
};
