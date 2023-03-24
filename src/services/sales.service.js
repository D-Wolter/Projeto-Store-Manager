const { salesModel, productsModel } = require('../models');

const findIdExist = async (newArray) => {
  const products = await Promise.all(
    newArray.map(async ({ productId }) => {
      const product = await productsModel.findById(productId);
      if (!product) return false;
      return true;
    }),
  );

  if (products.some((e) => e === false)) { 
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  }

  return { type: null, message: '' };
};

const insertSales = async (arraySales) => {
  const error = await findIdExist(arraySales);
  if (error.type) return error;

  const result = await salesModel.insertSalesProduct(arraySales);

  return { type: null, message: result };
};

const findAllSales = async () => {
  const result = await salesModel.findAllSales();

  return { type: null, message: result };
};

module.exports = {
  findIdExist,
  insertSales,
  findAllSales,
};
