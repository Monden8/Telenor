const User = require('../models/register.model');

// eslint-disable-next-line prefer-destructuring
const salt = process.env.salt;
const sha256 = require('sha256');

const postUser = (username, password, email) =>
  new Promise((resolve, reject) => {
    const newpass = sha256(password + salt);
    const newUser = new User({ username, password: newpass, email });
    newUser.save((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

module.exports = { postUser };
