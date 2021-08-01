const {Router}=require('express');
const router = Router();

//We call here the controllers we need
const farmerController=require('./controllers/farmerController');
const articleController=require('./controllers/articleController');
const recipeController=require('./controllers/recipeController');
const adminController=require('./controllers/adminController');

//We call here the middelwares we need
const checkAdminMiddleware = require('./middlewares/checkAdmin');
const {validateBody}=require('./middlewares/validator');

//We call here the schemas we need
const articleSchema = require('./schemas/article');
const recipeSchema = require('./schemas/recipe');
const farmerSchema = require('./schemas/farmer');


/*******farmer********/

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
 * Create a new farmer object and insert it in the database
 * @route POST /agriculteurs
 * @group Farmers
 * @param {ReqPostJson.model} object.body.required JSON Post object to add in database
 * @returns {Article.model} 201 - The article just created
 * @returns {Array<product_ids>} 201 - An array of products id related to the farmer
 * @returns {String} 500 - An error message
 */
router.post('/agriculteurs',checkAdminMiddleware,validateBody(farmerSchema),farmerController.addFarmer);

/**
* Update the corresponding famer in the database
* @route PATCH /agriculteurs/{id}
* @group Farmers
* @param {number} id.path.required The id of the product
* @param {ReqPostJson.model} object.body.required JSON Post object to add in database
* @returns {Article.model} 200 - An array of articles with a specific category
* @returns {String} 201 - The string of products id related to the farmer
* @returns {String} 500 - An error message
*/
router.patch('/agriculteurs/:id(\\d+)',checkAdminMiddleware,validateBody(farmerSchema),farmerController.updateFarmer);

/**
 * @route DELETE /agriculteurs/{id}
 * @group Farmers
 * @param {number} id.path.required The id of the farmer to delete
 * @returns {String} true or 500 - An error message
 */
router.delete('/agriculteurs/:id(\\d+)',checkAdminMiddleware,farmerController.delete);


/*******article********/

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
 * Create a new article object and insert it in the database
 * @route POST /articles
 * @group Articles
 * @param {ReqPostJson.model} object.body.required JSON Post object to add in database
 * @returns {Article.model} 201 - The article just created
 * @returns {String} 500 - An error message
 */
router.post('/articles',checkAdminMiddleware,validateBody(articleSchema),articleController.addArticle);

/**
* Update the corresponding article in the database
* @route PATCH /articles/{id}
* @group Articles
* @param {number} id.path.required The id of the product
* @param {ReqPostJson.model} object.body.required JSON Post object to add in database
* @returns {Article.model} 201 - An array of articles with a specific category
* @returns {String} 500 - An error message
*/
router.patch('/articles/:id(\\d+)',checkAdminMiddleware,validateBody(articleSchema),articleController.updateArticle);

/**
 * @route DELETE /articles/{id}
 * @group Articles
 * @param {number} id.path.required The id of the article to delete
 * @returns {String} true or 500 - An error message
 */
router.delete('/articles/:id(\\d+)',checkAdminMiddleware,articleController.delete);


/*******Recipe********/

/**
 * @route GET /recettes
 * @group Recipes
 * @returns {Array<Recipe>} 200 - An array of recipes
 */
router.get('/recettes',recipeController.findAll);

/**
* @route GET /recettes/{id}
* @group Recipes
* @param {number} id.path.required The id of the recipe to fetch
* @returns {Recipe.model} 200 - A single recipe identified by its id
* @returns {String} 404 - An error message
*/
router.get('/recettes/:id(\\d+)',recipeController.findOne);

/**
* Responds with recipes with a specific season from database
* @route GET /recettes/saison/{id}
* @group Recipes
* @param {number} id.path.required The id of the season
* @returns {Array<Recipe>} 200 - An array of recipes with a specific season
*/
router.get('/recettes/saison/:id(\\d+)', recipeController.findBySeason);

/**
* Create a new recipe object and insert it in the database
* @route POST /recettes
* @group Recipes
* @param {ReqPostJson.model} object.body.required JSON Post object to add in database
* @returns {Recipe.model} 201 - The recipe just created
* @returns {String} 500 - An error message
*/
router.post('/recettes',checkAdminMiddleware,validateBody(recipeSchema),recipeController.addRecipe);

/**
* Update the corresponding article in the database
* @route PATCH /recettes/{id}
* @group Recipes
* @param {number} id.path.required The id of the recipe
* @param {ReqPostJson.model} object.body.required JSON Post object to add in database
* @returns {Recipe.model} 201 - An array of recipes with a specific category
* @returns {String} 500 - An error message
*/
router.patch('/recettes/:id(\\d+)',checkAdminMiddleware,validateBody(recipeSchema),recipeController.updateRecipe);

  /**
 * @route DELETE /recettes/{id}
 * @group Recipes
 * @param {number} id.path.required The id of the recipe to delete
 * @returns {String} true or 500 - An error message
 */
router.delete('/recettes/:id(\\d+)',checkAdminMiddleware,recipeController.delete);


/*******admin********/

/**
* Create a new JWT token if the user is correctly logged
* @route POST /login
* @group Admins
* @param {ReqPostJson.model} object.body.required JSON Post object to add in database
* @returns {Object} 201 - Create an object with the id of the admin and the validat JWT Token inside
* @returns {String} 403 - Unauthorized connection
* @returns {String} 500 - An error message
*/
router.post('/login',adminController.loginSubmit);


router.use((_,response)=>{
    response.status(404).json('Page non trouvée');
});


module.exports=router;
