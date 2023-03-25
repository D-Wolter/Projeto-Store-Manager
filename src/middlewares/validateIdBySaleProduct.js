const { productsModel } = require('../models');

const validateIdBySaleProduct = async (req, res, next) => {
  const sale = req.body;

  const saleId = sale.map(({ productId }) => Number(productId));

  const allProducts = await productsModel.findAll();

  const arrayIds = allProducts.map((e) => e.id);

  const verify = saleId.every((Id) => arrayIds.includes(Id));
  
  if (!verify) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  validateIdBySaleProduct,
};