const express = require('express');
const productController = require('../../controllers/product.controller');

const router = express.Router();

router
  .route('/')
  .post(productController.createProduct)

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct)

router
  .route('/recommend/:productId')
  .get(productController.getRecommendations)

router
  .route('/search/:productDisplayName')
  .get(productController.getProducts)

module.exports = router;
