const Joi = require('joi');

const recipeSchema = Joi.object({
    id: Joi.number().integer().optional(),
    title: Joi.string().required(),
    ingredients: Joi.string().required(),
    description: Joi.string().required(),
    admin_id: Joi.number().integer().required(),
    season_id: Joi.number().integer().required()
});

module.exports = recipeSchema;