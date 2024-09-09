// This Function Organises errors thrown by mongoose validation

const formatErrors=(errors)=>{
    const formattedErrors=errors.map(err=>({
        param:err.path,
        message:err.msg,
        code:"INVALID_INPUT"
    }))
    return formattedErrors;
}

module.exports= formatErrors;