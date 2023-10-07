const mongoose = require("mongoose");

mongo_url = "mongodb://localhost:27017";
mongoose.connect(mongo_url,{useNewUrlParser: true}).catch(e=>{
    console.log('Connection error', e.message)
})

const db = mongoose.connection
module.exports=db