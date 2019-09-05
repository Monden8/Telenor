const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const Items = mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  serie: {
    type: String,
    required: true,
  },
  colour: {
    type: String,
    required: true,
  },
  opsystem: {
    type: String,
    required: true,
  },
  dualsim: {
    type: Boolean,
    required: true,
  },
  simplesim: {
    type: Boolean,
    required: true,
  },
  memory: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Items', Items, 'webshopItems');
