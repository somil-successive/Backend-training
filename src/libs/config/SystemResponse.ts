import { Response } from "express";

class SystemResponse{
    private statusCode:number;
    private res:Response;
    private message:string;
    private data:unknown;
    constructor(res:Response,statusCode:number,message:string,data:unknown){
        this.statusCode=statusCode;
        this.message=message;
        this.data=data;
        this.res=res;
    }

    public success(){
        this.res.status(this.statusCode);
        const response={status:this.statusCode,message:this.message,data:this.data};
        return response;
    }

    public failure(){
        this.res.status(this.statusCode);
        const response={status:this.statusCode,message:this.message,error:this.data};
        return response;

    }
}
export default SystemResponse;

