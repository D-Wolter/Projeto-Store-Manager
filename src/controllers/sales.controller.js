const { salesService } = require('../services');

const addNewSales = async (req, res) => {
  const { type, message } = await salesService.insertSales(req.body);
  if (type) return res.status(404).json({ message });
  return res.status(201).json(message);
};

const getAllSales = async (_req, res) => {
  const { message } = await salesService.findAllSales();
  return res.status(200).json(message);
};

const getByIdSales = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.findByIdSales(id);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  addNewSales,
  getAllSales,
  getByIdSales,
};
