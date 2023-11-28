export const checkNumParamMiddleware=(req,res,next)=>{
   const query=req.query;  
   if(isNaN(query.q1)){
      res.send("Query is not a number")
   }
      next();
   

   
}