const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { productService } = require('../services');
const { User } = require('../models');
const fetch = require('node-fetch');


const createProduct = catchAsync(async (req, res) => {
    const product = await productService.createProduct(req.body);
    res.status(httpStatus.CREATED).send(product);
  });

  const getProducts = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['productDisplayName']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await productService.queryProducts(filter, options);
    res.send(result);
  });
  
  const getProduct = catchAsync(async (req, res) => {
    const product = await productService.getProductById(req.query.productId);
    if (!product) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
    }
    res.send(product);
  });

  const searchProduct = catchAsync(async (req, res) => {
    const products = await productService.searchProducts(req.query.searchKey);
    if (!products) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
    }
    res.send(products);
  });
  
  const updateProduct = catchAsync(async (req, res) => {
    const product = await productService.updateProductById(req.params.productId, req.body);
    res.send(product);
  });
  
  const deleteProduct = catchAsync(async (req, res) => {
    await productService.deleteProductById(req.params.productId);
    res.status(httpStatus.NO_CONTENT).send();
  });

  const getRecommendations = catchAsync(async (req, res) => {
    // fetch('http://localhost', {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: '{}'
    // }).then(response => {
    //   return response.json();
    // }).catch(err => {console.log(err);})
    res.send({"msg": "Recommendations"})
  });

  const loadProducts = catchAsync(async (req, res) => {
    // const json= require('../p.json');
    // // const data = JSON.parse(json);
    // json.forEach(async(prod) => {
    //   User.findOne({name: { $regex: `${prod.seller}` }}).lean().then(async (s) => {
    //     prod.seller = s._id;
    //     const product = await productService.createProduct(prod)
    //     console.log(product.productDisplayName)
    //   }).catch(async(err) => {
    //     prod.seller = '62e0283eb5545c09ec72be6e'
    //     const product = await productService.createProduct(prod)
    //     console.log(product.productDisplayName)
    //   })
    // })
    // res.send('complete')
  });

  module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    getRecommendations,
    loadProducts,
    searchProduct
}