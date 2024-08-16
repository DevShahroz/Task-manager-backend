const notFound = (req,res)=>{
    res.status(404).send("Nothing here try something else")
}
module.exports=notFound