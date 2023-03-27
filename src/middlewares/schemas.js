const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const salesSquema = Joi.array().items(Joi.object({
  productId: Joi.number().integer().min(1).required()
    .label('productId'),
  quantity: Joi.number().integer().min(1).required()
    .label('quantity'),
}));

const productNameSchema = Joi.string().min(5).max(30).required();

module.exports = {
  idSchema,
  salesSquema,
  productNameSchema,
};
