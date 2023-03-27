const express = require('express');
const { productsController } = require('../controllers');
const mid = require('../middlewares/index');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getByIdProduct);
router.post('/', mid.verifyName, productsController.addProduct);
router.put('/:id', productsController.updateProduct);

module.exports = router;