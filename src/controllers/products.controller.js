const { productsService } = require('../services');

const getAllProducts = async (_req, res) => {
  const { message } = await productsService.findAll();
  res.status(200).json(message);
};

module.exports = {
  getAllProducts,
};
