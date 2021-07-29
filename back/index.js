//Require all the package needed for the API
require('dotenv').config();
const cors = require('cors');
const express = require("express");
const router=require('./app/router');
const swaggerConfig = require('./app/middlewares/swagger');

//Instantiate server
const app=express();

//Swagger configuration
const expressSwagger = require('express-swagger-generator')(app);

//Express configuration
app.use(express.urlencoded({extended: true}));

//Define on which PORT the server will listen
const port = process.env.PORT || 4000;

//Allow everybody to do request
app.use(cors());

//Swagger configuration
expressSwagger(swaggerConfig);

//Middleware that allow express to recognize the incoming Request Object as a JSON Object.
app.use(express.json());

//Middleware to use the router
app.use(router);

//Start the server on the defined port
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
});
