const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const productSchema = mongoose.Schema(
  {
    productId: {
      type: Number,
      required: true,
    },
    productDisplayName: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    masterCategory: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
    },
    articleType: {
        type: String,
    },
    baseColour: {
        type: String,
    },
    season: {
        type: String,
    },
    usage: {
        type: String,
    },
    seller: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'A product must have a seller']
    },
    image: String,

});

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);

/**
 * @typedef Product
 */
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
