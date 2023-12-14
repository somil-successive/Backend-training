class SystemResponse{
    private statusCode:number;
    private message:string;
    private data:unknown;
    constructor(statusCode:number,message:string,data:unknown){
        this.statusCode=statusCode;
        this.message=message;
        this.data=data;

    }

    public success(){
        const response={status:this.statusCode,message:this.message,data:this.data};
        return response;
    }

    public failure=()=>{

    }
}
export default SystemResponse;