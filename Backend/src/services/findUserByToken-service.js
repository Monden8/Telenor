const User = require('../models/register.model');
const jwt = require('jsonwebtoken');

const findUserByToken = token => new Promise((resolve, reject) => {
  const decoded = jwt.decode(token);

  User.find({ username: decoded.username }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      const result = { username: data[0].username, user_id: data[0]._id };
      resolve(result);
    }
  });
});

module.exports = { findUserByToken };
