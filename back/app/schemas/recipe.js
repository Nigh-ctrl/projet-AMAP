const Joi = require('joi');

//Schema validator of recipe object
const recipeSchema = Joi.object({
    id: Joi.number().integer().optional(),
    slug: Joi.string().required(),
    title: Joi.string().required(),
    ingredients: Joi.string().required(),
    description: Joi.string().required(),
    admin_id: Joi.number().integer().required(),
    season_id: Joi.number().integer().required()
});

module.exports = recipeSchema;