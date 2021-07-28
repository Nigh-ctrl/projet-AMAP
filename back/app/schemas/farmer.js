const Joi = require('joi');

const farmerSchema = Joi.object({
    id: Joi.number().integer().optional(),
    firstname: Joi.string().required(),
    name: Joi.string().required(),
    location: Joi.string().required(),
    biography: Joi.string().required(),
    basket: Joi.string().required(),
    admin_id: Joi.number().integer().required(),
    product_ids: Joi.array().items(Joi.number()).min(1).unique().required()
});

module.exports = farmerSchema;