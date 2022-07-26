const httpStatus = require('http-status');
const { Product } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Add a product
 * @param {Object} productBody
 * @returns {Promise<Product>}
 */
const createProduct = async (productBody) => {
  if (await Product.isProductExists(productBody.id)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Product already exists');
  }
  return Product.create(productBody);
};


const queryProducts = async (filter, options) => {
  const users = await Product.paginate(filter, options);
  return users;
};


const getProductById = async (id) => {
  return Product.findById(id);
};

const updateProductById = async (userId, updateBody) => {
  const user = await getProductById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if (updateBody.email && (await User.isEmailTaken(updateBody.email, userId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(user, updateBody);
  await user.save();
  return user;
};

const deleteProductById = async (productId) => {
  const product = await getProductById(product);
  if (!product) {
    throw new ApiError(httpStatus.NOT_FOUND, 'product not found');
  }
  await product.remove();
  return product;
};

module.exports = {
  createProduct,
  queryProducts,
  getProductById,
  updateProductById,
  deleteProductById
};
