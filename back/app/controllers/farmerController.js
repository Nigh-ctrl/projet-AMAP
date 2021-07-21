//We call here the class we needed
const Farmer = require('../models/farmer');

//The controller which contains all the method for the farmer class
const farmerController={

    findAll:async(_,response)=>{
        const farmers=await Farmer.findAll();
        response.json(farmers);
    },

    findOne:async(request,response,next)=>{
        const id=parseInt(request.params.id,10);

        const farmer=await Farmer.findOne(id);
        if(farmer){
            response.json(farmer);
        }else{
            next();
        }
    },

    findByProduct: async (request, response) => {
        const productId = parseInt(request.params.id, 10);

        const farmers = await Farmer.findByProduct(productId);
        response.json(farmers);
    },

};

module.exports=farmerController;