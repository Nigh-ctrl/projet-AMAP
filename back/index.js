require('dotenv').config();
const express = require("express");
const router=require('./app/router');

const app=express();

port = process.env.PORT || 5000;

app.use(express.json());

app.use(express.urlencoded({
    extended: true,
}));

app.use(router);

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
});