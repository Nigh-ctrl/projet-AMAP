require('dotenv').config();
const express = require("express");
const router=require('./app/router');

//Instantiate server
const app=express();

//Express configuration
app.use(express.urlencoded({extended: true}));


port = process.env.PORT || 5000;

app.use(express.json());


app.use(router);

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
});