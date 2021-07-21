//We call here the class we needed
const Farmer = require('../models/farmer');

//The controller which contains all the method for the farmer class
const farmerController={

    findAll:async(_,response)=>{
        try{
            const farmers=await Farmer.findAll();
            response.json(farmers);
        }catch(error){
            response.status(500).json(error.message);
        }
    },
    
    findOne:async(request,response,next)=>{
        const id=parseInt(request.params.id,10);

        try{
            const farmer=await Farmer.findOne(id);
            if(farmer){
                response.json(farmer);
            }else{
                next();
            }
        }catch(error){
            response.status(500).json(error.message);
        }
    },

    findByProduct: async (request, response) => {
        const productId = parseInt(request.params.id, 10);
        try{
            const farmers = await Farmer.findByProduct(productId);
            response.json(farmers);
        }catch(error){
            response.status(500).json(error.message);
        }
    },

    delete: async (request, response) => {
        
        const id = parseInt(request.params.id, 10);

        try{
            
            const farmer = await Farmer.findOne(id);
            
            await farmer.delete();

            response.json(true);

        }catch(error){
            response.status(500).json(error.message);
        }
    }

};

module.exports=farmerController;