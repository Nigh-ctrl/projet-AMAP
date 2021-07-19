const {Router}=require('express');
const router = Router();

//We call here the controllers we need
const farmerController=require('./controllers/farmerController');


/**
 * @route GET /agriculteurs
 * @group Farmers
 * @returns {Array<Farmer>} 200 - An array of farmers
 */
router.get('/agriculteurs',farmerController.findAll);

/**
 * @route GET /agriculteurs
 * @group Farmers
 * @param {number} id.path.required The id of the farmer to fetch
 * @returns {Farmer.model} 200 - A single farmer identified by its id
 * @returns {String} 404 - An error message
 */
router.get('/agriculteur/:id(\\d+)',farmerController.findOne);

router.use((_,response)=>{
    response.status(404).json('Page non trouvée');
});


module.exports=router;