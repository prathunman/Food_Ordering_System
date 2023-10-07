const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");

const db = require('./db');

const app = express();

var corsOption = {
    origin: "http://localhost:3000"
}

app.use(cors(corsOption));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended: true}));

db.on('error', console.error.bind(console,'MongoDB connection error: '))

app.get("/",(req, res)=>{
    res.json({message: "Welcome to Food Ordering"});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})