const verifyQuantity = (req, res, next) => {
  const salesArray = req.body.map(({ quantity }) => {
    if (+quantity <= 0) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
    
    if (!quantity) {
      return res.status(400).json({ message: '"quantity" is required' });
    }

    return true;
  });
  if (salesArray.every((e) => e === true)) {
    return next();
  }
};

module.exports = {
  verifyQuantity,
};