//We call here the class we needed
const Recipe = require('../models/recipe');

//The controller which contains all the method for the farmer class
const recipeController={
    
    findAll:async(_,response)=>{
        try{
            const recipes=await Recipe.findAll();
            response.json(recipes);
        }catch(error){
            response.status(500).json(error.message);
        }
        
    },

    findOne:async(request,response,next)=>{
        const id=parseInt(request.params.id,10);

        try{
            const recipe=await Recipe.findOne(id);
            if(recipe){
                response.json(recipe);
            }else{
                next();
            }
        }catch(error){
            response.status(500).json(error.message);
        }
    },

    findBySeason: async (request, response) => {
        const seasonId = parseInt(request.params.id, 10);

        try{
            const recipes = await Recipe.findBySeason(seasonId);
            response.json(recipes);
        }catch(error){
            response.status(500).json(error.message);
        }
    },

    addRecipe: async (request, response) => {
        try{

            const recipe = new Recipe(request.body);
            await recipe.save();

            response.status(201).json(article);

        }catch(error){
            response.status(500).json(error.message);
        }

    },

    delete: async (request, response) => {
        const id = parseInt(request.params.id, 10);

        try{
            
            const recipe = await Recipe.findOne(id);
            
            await recipe.delete();

            response.json(true);

        }catch(error){
            response.status(500).json(error.message);
        }
    }

};

module.exports=recipeController;