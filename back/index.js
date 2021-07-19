require('dotenv').config();
const express = require("express");

const app=express();

port = process.env.PORT || 5000;

app.use(express.json());

app.get('/',(_,res)=>{
    res.json("hello world")
});

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
});