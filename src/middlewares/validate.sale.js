const validateSale = (req, res, next) => {
  const data = req.body;

  const haveId = data.some(({ productId }) => productId === undefined);
  const haveQuantity = data.some(({ quantity }) => quantity === undefined);
  const ValidQuantity = data.some(({ quantity }) => quantity <= 0);

  if (haveId) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  if (haveQuantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  if (ValidQuantity) {
    return res.status(422)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = {
  validateSale,
};