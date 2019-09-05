const User = require('../models/register.model');
const jwt = require('jsonwebtoken');

const findCart = token => new Promise((resolve, reject) => {
  const decoded = jwt.decode(token);

  User.find({ username: decoded.username }, '-_id cart', (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports = { findCart };
