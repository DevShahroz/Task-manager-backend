const{CustomError}=require("../errors/customError")
const errorHandler = (err,req,res,next)=>{
if(err instanceof CustomError){
    return res.status(err.statuscode).json({msg:err.message})

}

    return res.status(500).json({msg:"Something went wrong"})
}

module.exports=errorHandler