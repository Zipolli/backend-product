const express = require('express');
const productController = require ('../controllers/productController.js');
const router = express.Router();
 
router.post('/product', productController.Insert);
 
module.exports = router;