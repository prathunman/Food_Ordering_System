const mongoose = require("mongoose");

mongo_url = "mongodb+srv://prathi:123123123@cluster0.uwnedvf.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongo_url,{useNewUrlParser: true}).catch(e=>{
    console.log('Connection error', e.message)
})

const db = mongoose.connection
module.exports=db