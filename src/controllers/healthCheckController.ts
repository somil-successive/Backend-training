import { Request, Response } from "express";

class HealthCheckController {
  public healthChecker = (req: Request, res: Response): void => {
    res.json({ Health: "OK" });
  };
}
export default new HealthCheckController().healthChecker;
