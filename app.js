const express = require("express");
const app =express();
const tasks= require("./routes/tasks");
const connectDb =require("./db/connect");
require('dotenv').config()
const notFound=require("./middlewares/notFound")
const errHandler=require('./middlewares/errorHandler')


app.use(express.static("./public"))
app.use(express.json())



app.use(express.json())
app.use("/api/v1/tasks",tasks)

app.use(notFound)
app.use(errHandler)

const start = async()=>{
    try {
        await connectDb()
        app.listen( port =3000);
    } catch (error) {
        console.log(error);
        
    }
}


start();