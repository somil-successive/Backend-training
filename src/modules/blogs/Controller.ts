import { NextFunction, Request, Response } from "express";
import Service from "./Service";
import SystemResponse from "../../libs/config/SystemResponse";
import fs from "fs";
import IBulkError from "./entity/IBulkErrors";
import BulkUpload from "./repositories/BulkUploadModel";
import BulkErrorDetail from "./repositories/BulkErrorModel";
import { v4 as uuidv4 } from "uuid";
import Papa from "papaparse";
import { blogShema } from "./validation";
import { model } from "./repositories/Schema";
import createHttpError from "http-errors";
import logger from "../../utils/logger";
import {
  handleRemainingData,
  transformRowData,
} from "../../utils/paarserHelper";

//eslint-disable-next-line

class Controller {
  private service = new Service();

  public getAll = async (req: Request, res: Response) => {
    logger.info("Blogs Controller -  getAll");
    //eslint-disable-next-line
    const { page, limit }: any = req.query;
    if (page || limit) {
      if (isNaN(page) || isNaN(limit)) {
        return res.status(406).send("invalid page or limit");
      }
    }
    const pageNumber: number = page ? parseInt(String(page), 10) || 1 : 1;
    const limitNumber: number = limit ? parseInt(String(limit), 10) : 10;
    const skip: number = (pageNumber - 1) * limitNumber;

    const data = await this.service.getAll(skip, limitNumber);
    if (data) {
      res.send(
        new SystemResponse(
          res,
          200,
          "Data fetched Successfully",
          data
        ).success()
      );
    } else {
      res.status(502).json({ error: "No Data Found " });
    }
  };

  public create = async (req: Request, res: Response): Promise<void> => {
    try {
      logger.info("Blogs Controller -  create");

      const data = req.body;
      //eslint-disable-next-line
      const msg: any = await this.service.create(data);
      if (!msg) {
        res.send(
          new SystemResponse(
            res,
            200,
            "Blog Created Successfully",
            {}
          ).success()
        );
      }
    } catch (err) {
      logger.info("Error Blogs Controller -  create");

      res.status(406).json({ error: err });
    }
  };

  public getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = await this.service.getById(id);
      res.send(
        new SystemResponse(
          res,
          200,
          "Blogs fetched Successfully",
          data
        ).success()
      );
    } catch (err) {
      res.send(
        new SystemResponse(
          res,
          406,
          "Blogs Not Found",
          "No Blog Found"
        ).failure()
      );
    }
  };

  public getByCategory = async (req: Request, res: Response) => {
    try {
      //eslint-disable-next-line
      const { page, limit }: any = req.query;
      if (page || limit) {
        if (isNaN(page) || isNaN(limit)) {
          return res.status(406).send("invalid page or limit");
        }
      }
      const pageNumber: number = page ? parseInt(String(page), 10) || 1 : 1;
      const limitNumber: number = limit ? parseInt(String(limit), 10) : 10;

      const skip: number = (pageNumber - 1) * limitNumber;

      const { categories } = req.params;

      const data = await this.service.getByCategory(
        skip,
        limitNumber,
        categories
      );
      if (data.length !== 0) {
        res.send(
          new SystemResponse(
            res,
            200,
            "Blogs fetched Successfully",
            data
          ).success()
        );
      } else {
        throw new Error("No data found");
      }
    } catch (err) {
      res.send(new SystemResponse(res, 404, "Blogs Not Found", err).failure());
    }
  };

  public updateByTitle = async (req: Request, res: Response) => {
    const { title } = req.params;
    const newPost = req.body;
    const msg = await this.service.updateByTitle(title, newPost);
    if (msg === null) {
      res.send(
        new SystemResponse(res, 200, "Updated Successfully", {}).success()
      );
    } else {
      res.status(406).json({ error: msg });
    }
  };
  public search = async (req: Request, res: Response) => {
    try {
      //eslint-disable-next-line
      const { page, limit }: any = req.query;

      if (page || limit) {
        if (isNaN(page) || isNaN(limit)) {
          return res.status(406).send("invalid page or limit");
        }
      }
      const pageNumber: number = page ? parseInt(String(page), 10) || 1 : 1;
      const limitNumber: number = limit ? parseInt(String(limit), 10) : 10;
      const skip: number = (pageNumber - 1) * limitNumber;

      const { value } = req.params;
      const data = await this.service.search(skip, limitNumber, value);
      if (data.length !== 0) {
        res.send(
          new SystemResponse(
            res,
            200,
            "Blogs fetched Successfully",
            data
          ).success()
        );
      } else {
        res.status(406).json({ error: "Invalid Search Query" });
      }
    } catch (err) {
      res.send(err);
    }
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const msg = await this.service.delete(id);
    if (!msg) {
      res.send(
        new SystemResponse(res, 200, "Blog Deleted Successfully", {}).success()
      );
    } else {
      res.status(406).json({ error: msg });
    }
  };

  public update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const newPost = req.body;
      const msg = await this.service.update(id, newPost);
      if (msg === null) {
        res.send(
          new SystemResponse(res, 200, "Updated Successfully", {}).success()
        );
      } else {
        throw new Error("Invalid id");
      }
    } catch (err) {
      res.status(406).send(err);
    }
  };

  public bulkUpload = async (req: Request, res: Response) => {
    try {
      const csvFile: Express.Multer.File | undefined = req.file;
      const session_id: string = uuidv4();
      const startTime = Date.now();
      const batchSize = 10000;
      let recordsProcessCount = 0;
      let errorCount = 0;
      //eslint-disable-next-line
      let batchData: any[] = [];
      //eslint-disable-next-line
      let bulkUploadErrors: any[] = [];
      if (!csvFile) {
        return res.send("No file selected");
      }

      const filePath = csvFile.path;
      const readStream = fs.createReadStream(filePath);

      Papa.parse(readStream, {
        header: true,
        dynamicTyping: true,
        worker: true,

        step: async (result, parser) => {
          const rowData = result.data;
          const transformedObject = transformRowData(rowData);
          recordsProcessCount += 1;

          const { error } = blogShema.validate(transformedObject, {
            abortEarly: false,
          });

          if (error) {
            errorCount += 1;
            const bulkErrorDetail: IBulkError = {
              session_id: session_id,
              rowNumber: recordsProcessCount,
              errorDetails: Object(error.message),
            };

            bulkUploadErrors.push({
              insertOne: {
                document: bulkErrorDetail,
              },
            });

            if (bulkUploadErrors.length === batchSize) {
              parser.pause();
              await BulkErrorDetail.bulkWrite(bulkUploadErrors, {
                ordered: false,
              });
              bulkUploadErrors = [];
              parser.resume();
            }
          } else {
            batchData.push({
              insertOne: {
                document: transformedObject,
              },
            });

            if (batchData.length === batchSize) {
              parser.pause();
              await model.bulkWrite(batchData, { ordered: false });
              batchData = [];
              parser.resume();
            }
          }
        },
        complete: async () => {
          await handleRemainingData(
            bulkUploadErrors,
            BulkErrorDetail,
            batchData,
            model,
            recordsProcessCount,
            errorCount,
            startTime,
            session_id,
            BulkUpload
          );
          res.send("Processing completed");
        },
        error: async () => {
          await handleRemainingData(
            bulkUploadErrors,
            BulkErrorDetail,
            batchData,
            model,
            recordsProcessCount,
            errorCount,
            startTime,
            session_id,
            BulkUpload
          );
          res.status(500).json({ error: "Internal server error" });
        },
      });
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  public getAllBulkUploads = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const data = await this.service.getAllBulkUploads();

      if (data) {
        res.send(
          new SystemResponse(
            res,
            200,
            "Data fetched Successfully",
            data
          ).success()
        );
      } else {
        next(createHttpError(404, "No Data Found"));
      }
    } catch (err) {
      res.status(502).json({ error: err });
    }
  };

  public getBulkUploadErrorDetails = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    const { page, limit } = req.query;
    const { sessionId } = req.params;
    const pageNumber: number = page ? parseInt(String(page), 10) || 1 : 1;
    const limitNumber: number = limit ? parseInt(String(limit), 10) : 10;
    const skip: number = (pageNumber - 1) * limitNumber;
    try {
      const data = await this.service.getAllErrorDetails(
        skip,
        limitNumber,
        sessionId
      );

      if (data.length > 0) {
        res.send(
          new SystemResponse(
            res,
            200,
            "Data fetched Successfully",
            data
          ).success()
        );
      } else {
        res.send(
          new SystemResponse(res, 404, "Data not found", data).success()
        );
      }
    } catch (err) {
      res.status(404).json({ error: err });
    }
  };

  public deleteBulkUploadErrors = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    await BulkErrorDetail.deleteMany({});

    res.json({ message: "all bulk errors deleted successfully" });
  };
}
export default Controller;
