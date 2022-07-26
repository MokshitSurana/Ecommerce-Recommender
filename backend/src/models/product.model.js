const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const productSchema = mongoose.Schema(
  {
    productId: {
      type: String,
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
    },
    image: String,

});

// add plugin that converts mongoose to json
productSchema.plugin(toJSON);
productSchema.plugin(paginate);

productSchema.statics.isProductExists = async function (productId) {
    const user = await this.findOne({ productId: `${productId}`});
    return !!user;
  };

/**
 * @typedef Product
 */
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
