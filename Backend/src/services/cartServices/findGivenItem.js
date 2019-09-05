const Items = require('../../models/items.model');
const User = require('../../models/register.model');
const jwt = require('jsonwebtoken');

const findGivenItem = itemID => new Promise((resolve, reject) => {
  Items.find({ _id: itemID }, (err, data) => {
    if (err || data <= 0) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

const AddToCart = (itemToAdd, refreshToken) => new Promise((resolve, reject) => {
  const decoded = jwt.decode(refreshToken);

  User.findOneAndUpdate({ username: decoded.username },
    { $push: { cart: itemToAdd } },
    { new: true },
    (err, data) => {
      if (err || data <= 0) {
        reject(err);
      } else {
        resolve(data);
      }
    });
});

module.exports = { findGivenItem, AddToCart };
