//We call here the class we needed
const Recipe = require('../models/recipe');

//The controller which contains all the method for the recipe class
const recipeController={
    
    //This function catch all recipes from the database and send them in a JSON object
    findAll:async(_,response)=>{
        try{
            const recipes=await Recipe.findAll();
            response.json(recipes);
        }catch(error){
            response.status(500).json(error.message);
        }
        
    },

    //This method catch one recipe from the database and send it in a JSON object
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

    //This method catch all recipes of a specific season from the database and send them in a JSON object
    findBySeason: async (request, response) => {
        const seasonId = parseInt(request.params.id, 10);

        try{
            const recipes = await Recipe.findBySeason(seasonId);
            response.json(recipes);
        }catch(error){
            response.status(500).json(error.message);
        }
    },

    //This method recieve JSON object and add a recipe in the database 
    addRecipe: async (request, response) => {
        try{

            const recipe = new Recipe(request.body);
            await recipe.save();

            response.status(201).json(recipe);

        }catch(error){
            response.status(500).json(error.message);
        }

    },

    //This method recieve JSON object and update a recipe in the database 
    updateRecipe: async (request, response) => {

        const id = parseInt(request.params.id, 10);

        try{

            const recipe = await Recipe.findOne(id);

            const {slug,title,ingredients,description,admin_id,season_id}=request.body;

            //We do the test for each property of the object
            //We modify the property only if it exists
            if(slug){
                recipe.slug = slug;
            }

            if(recipe){
                recipe.title = title;
            }
            
            if(ingredients){
                recipe.ingredients = ingredients;
            }

            if(description){
                recipe.description = description;
            }

            if(admin_id){
                recipe.admin_id = admin_id;
            }
            
            if(season_id){
                recipe.season_id = season_id;
            }

            await recipe.save();

            response.status(201).json(recipe);

        }catch(error){
            response.status(500).json(error.message);
        }

    },

    //This method delete a recipe in the database
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