const cors = require('cors');
require('dotenv').config();
const express = require("express");
const router=require('./app/router');
const cors = require('cors');

//Instantiate server
const app=express();

//Express configuration
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 5432;

//Welcome everybody
app.use(cors());

app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
});
