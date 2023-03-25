const { salesService } = require('../services');

const getAllSales = async (_req, res) => {
  const result = await salesService.getAllSales();

  return res.status(200)
    .json(result.message);
};

const getByIdSales = async (req, res) => {
  const { id } = req.params;
  const { message } = await salesService.findIdExist(id);
  if (!message[0].date) {
    return res.status(404).json({ message });
  }
  return res.status(200).json(message);
};

const addNewSales = async (req, res) => {
  const data = req.body;
  const result = await salesService.insertSales(data);

  if (result.code) {
    return res.status(result.code)
      .json({ message: result.message });
  }
  return res.status(201)
    .json(result.message);
};

module.exports = {
  addNewSales,
  getAllSales,
  getByIdSales,
};
