const { verifyId } = require('./verifyId');
const { verifyName } = require('./verifyName');
const { verifyProductId } = require('./verifyProductId');
const { verifyQuantity } = require('./verifyQuantity');
const { schemas } = require('./schemas');
const { verifyInsertProduct } = require('./verifyInsertProduct');
const { validateIdBySaleProduct } = require('./validateIdBySaleProduct');
const { validateSale } = require('./validate.sale');

module.exports = {
  verifyId,
  verifyName,
  verifyProductId,
  verifyQuantity,
  schemas,
  verifyInsertProduct,
  validateIdBySaleProduct,
  validateSale,
};
