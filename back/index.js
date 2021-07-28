const cors = require('cors');
require('dotenv').config();
const express = require("express");
const router=require('./app/router');

//Instantiate server
const app=express();

//Express configuration
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 4000;

//Welcome everybody
app.use(cors());

app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
});