import { Request, Response } from "express";

class AsyncController {
  public asyncData = async (req: Request, res: Response): Promise<void> => {
    const myPromise = new Promise(function (reject) {
      setTimeout(function () {
        reject("Time Exceeds");
      }, 3000);
    });

    try {
      const response = await myPromise;
      console.log(response);
      res.send(response);
    } catch (err) {
      res.status(400).json({ error: err });
    }
  };
}

export default new AsyncController().asyncData;
