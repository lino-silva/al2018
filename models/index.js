'use strict';

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  productId: String,
  productDetail: Object,
  mirrorId: String,
  railId: String,
  size: String,
}, {
  timestamps: true,
});

productSchema.methods.findWithSameProductId = function () {
  return this.model('Product').findOne({
    productId: this.productId,
  }).exec();
};

productSchema.statics.findWithProductId = function (productId, cb) {
  return this.findOne({ productId }, cb);
};

productSchema.statics.findWithProductIdAndSize = function (productId, size, cb) {
  return this.findOne({ productId, size }, cb);
};

productSchema.statics.findWithProductIdsAndSizes = function (productTuples, cb) {
  // eslint-disable-next-line
  const productsToLower = productTuples.map(x => ({ productId: x.productId, size: x.size.toLowerCase() }));
  return this.find({ $or: productsToLower }, cb);
};

productSchema.statics.findWithMirrorIdOrRailId = function (product, cb) {
  return this.find({ $and: [
    { _id: { $ne: product._id } }, // eslint-disable-line
    { mirrorId: { $ne: '' } },
    { railId: { $ne: '' } },
    { $or: [
      { mirrorId: product.mirrorId },
      { railId: product.railId }] },
  ] }, cb);
};

productSchema.statics.findWithRailId = function (railId, cb) {
  return this.findOne({ railId }, cb);
};

productSchema.statics.findWithMirrorId = function (mirrorId, cb) {
  return this.findOne({ mirrorId }, cb);
};

productSchema.index({
  productId: 1,
});

productSchema.index({
  mirrorId: 1,
});

productSchema.index({
  railId: 1,
});

productSchema.index({
  productId: 1,
  size: 1,
});

module.exports = mongoose.model('Product', productSchema);
