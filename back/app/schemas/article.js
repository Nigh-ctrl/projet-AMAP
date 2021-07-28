const Joi = require('joi');

const articleSchema = Joi.object({
    id: Joi.number().integer().optional(),
    slug: Joi.string().required(),
    title: Joi.string().required(),
    content: Joi.string().required(),
    admin_id: Joi.number().integer().required(),
    category_id: Joi.number().integer().required()
});

module.exports = articleSchema;