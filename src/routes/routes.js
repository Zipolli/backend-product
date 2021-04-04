const express = require('express');
const productController = require ('../controllers/productController.js');
const router = express.Router();
 
router.post('/product', productController.Insert);
router.get('/product', productController.SelectAll);
router.get('/product/:id', productController.SelectDetail);
 
module.exports = router;