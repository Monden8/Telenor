const User = require('../models/register.model');
const jwt = require('jsonwebtoken');

const updateCart = (cart, refreshToken ) => new Promise((resolve, reject) => {
  const decoded = jwt.decode(refreshToken);
  User.findOneAndUpdate({ username: decoded.username },
    { $set: { cart } },
    { new: true },
    (err, data) => {
      if (err || data <= 0) {
        reject(err);
      } else {
        resolve(data);
      }
    });
});

module.exports = { updateCart };

