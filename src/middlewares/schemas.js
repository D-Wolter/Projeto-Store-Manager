const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const salesSquema = Joi.array().items(Joi.object({
  productId: Joi.number().integer().min(1).required()
    .label('productId'),
  quantity: Joi.number().integer().min(1).required()
    .label('quantity'),
}));

module.exports = {
  idSchema,
  salesSquema,
};
