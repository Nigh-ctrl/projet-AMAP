//We call here the class we needed
const Article = require('../models/article');

//The controller which contains all the method for the article class
const articleController={
    
    findAll:async(_,response)=>{
        try{
            const articles=await Article.findAll();
            response.json(articles);
        }catch(error){
            response.status(500).json(error.message);
        }
    },

    findOne:async(request,response,next)=>{
        const id=parseInt(request.params.id,10);

        try{
            const article=await Article.findOne(id);
            if(article){
                response.json(article);
            }else{
                next();
            }
        }catch(error){
            response.status(500).json(error.message);
        }
    },

    findByCategory: async (request, response) => {
        const categoryId = parseInt(request.params.id, 10);

        try{
            const articles = await Article.findByCategory(categoryId);
            response.json(articles);
        }catch(error){
            response.status(500).json(error.message);
        }
    },
    
    addArticle: async (request, response) => {
        try{

            const article = new Article(request.body);
            await article.save();

            response.status(201).json(article);

        }catch(error){
            response.status(500).json(error.message);
        }

    },

    delete: async (request, response) => {
        const id = parseInt(request.params.id, 10);

        try{

            const article = await Article.findOne(id);
            
            await article.delete();

            response.json(true);

        }catch(error){
            response.status(500).json(error.message);
        }
    }

};

module.exports=articleController;