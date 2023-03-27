const { productsService } = require('../services');
const errorMap = require('./error.map');

const getAllProducts = async (_req, res) => {
  const { message } = await productsService.findAll();
  res.status(200).json(message);
};

const getByIdProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findById(id);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

const addProduct = async (req, res) => {
  const { name } = req.body;
  const { message } = await productsService.insert(name);
  return res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const Id = Number(id);
  const product = await productsService.update(Id, name);
  if (product.type) {
    return res.status(errorMap.mapError(product.type)).json({ message: product.message });
  }
  return res.status(200).json(product.message);
};

module.exports = {
  getAllProducts,
  getByIdProduct,
  addProduct,
  updateProduct,
};
