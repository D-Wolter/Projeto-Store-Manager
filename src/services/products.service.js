const mid = require('../middlewares/index');
const { productsModel } = require('../models');
const { validateProductName } = require('./validations/validateInput');
 
const findAll = async () => {
  const products = await productsModel.findAll(); 

  return { type: null, message: products };
};

const findById = async (id) => {
  const error = mid.verifyId(id);
  if (error.type) return error;

  const product = await productsModel.findById(id);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: product };
};

const insert = async (product) => {
  const insertId = await productsModel.insert(product);
  const newProduct = await productsModel.findById(insertId);

  return { type: null, message: newProduct };
};

const update = async (id, name) => {
  const errorId = mid.verifyId(id);
  if (errorId.type) {
    return errorId;
  }
  const errorName = validateProductName(name);
  if (errorName.type) {
    return errorName;
  }
  const result = await productsModel.update(id, name);
  if (result.affectedRows === 0) {
    return { type: 'NOT_FOUND', message: 'Product not found' };
  }
  const updated = await productsModel.findById(id);
  return { type: null, message: updated };
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
};