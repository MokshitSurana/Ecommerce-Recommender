const express = require('express');
const productController = require('../../controllers/product.controller');

const router = express.Router();

router
  .route('/')
  .get(productController.getProduct)
  .post(productController.createProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct)

router
  .route('/recommend/:productId')
  .get(productController.getRecommendations)

router
  .route('/search')
  .get(productController.searchProduct)

router
    .route('/load-products')
    .post(productController.loadProducts)

module.exports = router;
