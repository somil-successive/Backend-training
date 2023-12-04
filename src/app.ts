import express, { Application, NextFunction } from "express";
import fs from "fs";
import createError from "http-errors";
import  errorHandlingMiddleware  from "./middleware/errorHandlingMiddleware.js";
import { Request, Response } from "express";
import DataRouter from "./routes/dataRoutes.js";



class App{

  private app : Application = express();

  private setRoutes = () : void=>{
    const dataRouter : DataRouter = new DataRouter();
    this.app.use('/data', dataRouter.getRouter());
  }

  private setErrorHandler = () : void =>{
    this.app.use(errorHandlingMiddleware);
  }

  constructor(){
    this.setRoutes();
    this.app.use(express.json());
    this.setErrorHandler();
  }


  public startServer = (PORT : number) : void=>{
    this.app.listen(PORT, ()=>{
      console.log(`server is running on PORT ${PORT}`);
    })
  }
}

export default new App();


