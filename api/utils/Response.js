// Custom Class For Desired Response Format

class CustomResponse{
    constructor(status,data,error,message){
        this.status=status
        if(data) this.data=data
        if(error) this.error=error
        this.message=message
    }
}

module.exports=CustomResponse