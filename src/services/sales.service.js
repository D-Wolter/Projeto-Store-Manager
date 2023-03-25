const { salesModel, productsModel } = require('../models');
const errorMap = require('../util/error.map');
const { salesSquema } = require('../middlewares/schemas');

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();

  return { message: sales };
};

const findIdExist = async (Id) => {
  const sale = await salesModel.findByIdSales(Id);

  if (sale.length === 0) {
    return errorMap('Sale not found');
  }
  return { message: sale };
};

const insertSales = async (data) => {
  const { error } = salesSquema.validate(data);

  if (error) {
    return errorMap(error.message);
  }
  const arr = await Promise.all(data.map(async (obj) => {
    const result = await productsModel.findById(obj.productId);
    return result;
  }));

  if (arr.includes(undefined)) {
    return errorMap('Product not found');
  }
  const newSale = await salesModel.insertSalesProduct(data);

  const newData = {
    id: newSale,
    itemsSold: data.map((e) => e),
  };

  return { message: newData };
};

module.exports = {
  findIdExist,
  insertSales,
  getAllSales,
};
