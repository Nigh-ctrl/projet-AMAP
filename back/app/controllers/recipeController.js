//We call here the class we needed
const Recipe = require('../models/recipe');

//The controller which contains all the method for the farmer class
const recipeController={
    
    findAll:async(_,response)=>{
        const recipes=await Recipe.findAll();
        response.json(recipes);
    },

    findOne:async(request,response,next)=>{
        const id=parseInt(request.params.id,10);

        const recipe=await Recipe.findOne(id);
        if(recipe){
            response.json(recipe);
        }else{
            next();
        }
    },

    findBySeason: async (request, response) => {
        const seasonId = parseInt(request.params.id, 10);

        const recipes = await Recipe.findBySeason(seasonId);
        response.json(recipes);
    },

};

module.exports=recipeController;