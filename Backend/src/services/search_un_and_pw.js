const User = require('../models/register.model');

const salt = process.env.salt;
const sha256 = require('sha256');

const searchUsernameAndPassword = (usernamep, passwordp) =>
  new Promise((resolve, reject) => {
    const newpass = sha256(passwordp + salt);

    User.findOne({ username: usernamep, password: newpass }, (err, data) => {
      if (err) {
        reject(err);
      } else if (data === null) {
        reject(new Error('Username or password is incorrect.'));
      } else {
        resolve(data);
      }
    });
  });

module.exports = { searchUsernameAndPassword };
