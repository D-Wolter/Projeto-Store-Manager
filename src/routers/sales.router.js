const express = require('express');

const { salesController } = require('../controllers');
const mid = require('../middlewares/index');

const router = express.Router();

router.get('/', salesController.getAllSales);
router.get('/:id', salesController.getByIdSales);
router.post('/', mid.validateSale, mid.validateIdBySaleProduct, salesController.addNewSales);

module.exports = router;