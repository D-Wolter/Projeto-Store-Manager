const verifyInsertProduct = (data) => {
  const { name } = data;

  if (typeof (name) !== 'string') {
    return {
      code: 400, message: '"name" must be a string',
    };
  }
  return { message: '' };
};

module.exports = {
  verifyInsertProduct,
};