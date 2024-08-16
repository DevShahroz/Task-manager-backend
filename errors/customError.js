class CustomError extends Error{
    constructor(message,statuscode){
        super(message)
        this.statuscode=statuscode
    }
}


const createCustomError=(msg,statuscode)=>{
    return new CustomError(msg,statuscode)
}

module.exports={
    createCustomError,CustomError
}