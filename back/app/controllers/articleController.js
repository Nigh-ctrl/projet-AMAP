//We call here the class we needed
const Article = require('../models/article');

//The controller which contains all the method for the farmer class
const articleController={
    
    findAll:async(_,response)=>{
        const articles=await Article.findAll();
        response.json(articles);
    },

    findOne:async(request,response,next)=>{
        const id=parseInt(request.params.id,10);

        const article=await Article.findOne(id);
        if(article){
            response.json(article);
        }else{
            next();
        }
    },

    findByCategory: async (request, response) => {
        const categoryId = parseInt(request.params.id, 10);

        const articles = await Article.findByCategory(categoryId);
        response.json(articles);
    },

};

module.exports=articleController;