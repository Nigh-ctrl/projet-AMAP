const {Router}=require('express');
const router = Router();

//We call here the controllers we need
const farmerController=require('./controllers/farmerController');
const articleController=require('./controllers/articleController');
const recipeController=require('./controllers/recipeController');

/**
 * @route GET /agriculteurs
 * @group Farmers
 * @returns {Array<Farmer>} 200 - An array of farmers
 */
router.get('/agriculteurs',farmerController.findAll);

/**
 * @route GET /agriculteurs/{id}
 * @group Farmers
 * @param {number} id.path.required The id of the farmer to fetch
 * @returns {Farmer.model} 200 - A single farmer identified by its id
 * @returns {String} 404 - An error message
 */
router.get('/agriculteurs/:id(\\d+)',farmerController.findOne);

/**
 * Responds with farmers with a specific product from database
 * @route GET /agriculteurs/produits/{id}
 * @group Farmers
 * @param {number} id.path.required The id of the product
 * @returns {Array<Farmer>} 200 - An array of farmers with a specific product
 */
 router.get('/agriculteurs/produits/:id(\\d+)', farmerController.findByProduct);



/**
 * @route GET /articles
 * @group Articles
 * @returns {Array<Article>} 200 - An array of articles
 */
 router.get('/articles',articleController.findAll);

 /**
  * @route GET /articles/{id}
  * @group Articles
  * @param {number} id.path.required The id of the article to fetch
  * @returns {Article.model} 200 - A single article identified by its id
  * @returns {String} 404 - An error message
  */
 router.get('/articles/:id(\\d+)',articleController.findOne);
 
 /**
  * Responds with articles with a specific category from database
  * @route GET /articles/categorie/{id}
  * @group Articles
  * @param {number} id.path.required The id of the product
  * @returns {Array<Article>} 200 - An array of articles with a specific category
  */
  router.get('/articles/categorie/:id(\\d+)', articleController.findByCategory);

  

/**
 * @route GET /recettes
 * @group Recipes
 * @returns {Array<Article>} 200 - An array of recipes
 */
 router.get('/recettes',recipeController.findAll);

 /**
  * @route GET /recettes/{id}
  * @group Recipes
  * @param {number} id.path.required The id of the recipe to fetch
  * @returns {Article.model} 200 - A single recipe identified by its id
  * @returns {String} 404 - An error message
  */
 router.get('/recettes/:id(\\d+)',recipeController.findOne);
 
 /**
  * Responds with recipes with a specific season from database
  * @route GET /recettes/saison/{id}
  * @group Recipes
  * @param {number} id.path.required The id of the season
  * @returns {Array<Article>} 200 - An array of recipes with a specific season
  */
  router.get('/recettes/saison/:id(\\d+)', recipeController.findBySeason);



router.use((_,response)=>{
    response.status(404).json('Page non trouvée');
});


module.exports=router;