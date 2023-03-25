const errorList = [
  {
    code: 404, message: 'Sale not found', // NOT FOUND
  },
  {
    code: 404, message: 'Product not found', // NOT FOUND
  },
  {
    code: 422, message: '"quantity" must be greater than or equal to 1', // UNPROCESSABLE CONTENT
  },
  {
    code: 400, message: '"productId" is required', // BAD REQUEST
  },
  {
    code: 400, message: '"quantity" is required', // BAD REQUEST
  },
];

const errorMap = (message) => errorList.find((error) => error.message.includes(message));

module.exports = errorMap;