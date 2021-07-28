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

    addFarmer: async (request, response) => {
        try{

            //Creation of a temporary object to stock the needed information
            const {products_id}=request.body;

            const farmer = new Farmer(request.body);

            await farmer.save(products_id);

            response.status(201).json(farmer);

        }catch(error){
            response.status(500).json(error.message);
        }
        
    },
    
    updateFarmer: async (request, response) => {

        const id = parseInt(request.params.id, 10);

        try{

            var farmer = await Farmer.findOne(id);

            const {firstname,name,location,biography,basket,admin_id,products_id}=request.body;

            //We do the test for each property of the object
            //We modify the property only if it exists
            if(firstname){
                farmer.firstname = firstname;
            }

            if(name){
                farmer.name = name;
            }

            if(location){
                farmer.location = location;
            }
            
            if(biography){
                farmer.biography = biography;
            }

            if(basket){
                farmer.basket = basket;
            }

            if(admin_id){
                farmer.admin_id = admin_id;
            }

            await farmer.save(products_id);

            farmer = await Farmer.findOne(id);

            response.status(201).json(farmer);

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