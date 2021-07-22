require('dotenv').config();
const express = require("express");
const router=require('./app/router');

//Instantiate server
const app=express();

//Express configuration
app.use(express.urlencoded({extended: true}));

const port = process.env.PORT || 5000;

//pas d'object de config au middleware, pas besoin DANS NOTRE EXEMPLE de gérer très finement les droits d'entrée
//on ne met pas de limitation d'accès, welcome everybody
app.use(cors());

app.use(express.json());

app.use(router);

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
});