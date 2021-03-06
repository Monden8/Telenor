const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

mongoose.set('useFindAndModify', false);

const items = require('./items.model').schema;

const User = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: false,
  },
  cart: [items],
});

User.plugin(uniqueValidator, { message: 'Username is already taken.' });

module.exports = mongoose.model('User', User, 'webshopUsers');
