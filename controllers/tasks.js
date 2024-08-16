const asyncWrapper = require("../middlewares/asyncWrapper")
const Task = require("../models/task")
const {createCustomError}=require("../errors/customError")

//View all tasks
const getAllTasks=asyncWrapper (async (req,res)=>{
  
   const tasks = await Task.find({})
   res.status(200).json({tasks})
  
})

//Create a new task
const createTask= asyncWrapper( async (req,res)=>{

    
        const task = await Task.create(req.body)
        res.status(201).json({task})
   
})
//View specific task(by ID)
const getTask= asyncWrapper(async (req,res,next)=>{
  
        const { id:taskID }=  req.params
        const task = await Task.findOne({ _id:taskID });
        if (!task) {
         return next(createCustomError(`No tast assigned to id:${taskID}`,404))  

            } 
        res.status(200).json({ task })    
} )


//Update the selected task(by ID)
const updateTask=asyncWrapper( async (req,res)=>{
    
        const { id:taskID }=  req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{new:true,runValidators:true,})
        if(!task){
            return next(createCustomError(`No tast assigned to id:${taskID}`,404))        }
        res.status(200).json({ task })         
}) 


//Delete the selected task(by ID) 
const deleteTask= asyncWrapper( async (req,res)=>{
  
        const {id:taskID}=req.params;
        const task =await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(400).json({msg:`No task with id ${taskID}`})
        }
        res.status(200).json({task})
})



module.exports={getAllTasks,createTask,getTask,updateTask,deleteTask}