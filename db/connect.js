const mongoose = require('mongoose')



const connectDb=(url)=>{
return mongoose.connect(process.env.DB_URI)
}

module.exports =connectDb;