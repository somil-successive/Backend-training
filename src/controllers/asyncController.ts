import { Request, Response } from "express";

class AsyncController {
  public asyncData = async (req: Request, res: Response): Promise<void> => {
    let myPromise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject("Time Exceeds");
      }, 3000);
    });

    try {
      await myPromise;
    } catch (err) {
      res.status(400).json({ error: err });
    }
  };
}

export default AsyncController;
