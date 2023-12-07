import {Request,Response} from 'express';

export const asyncData = async (req:Request, res:Response) => {
  let myPromise = new Promise(function (resolve,reject) {
    setTimeout(function () {
      reject("Time Exceeds");
    }, 3000);       
  });
  
  try{
    const response = await myPromise;
  }
  catch(err){
    res.json({error: err})
  }
};
