const User = require('../models/register.model');

const eraseRefreshToken = result => new Promise((resolve, reject) => {
  User.findOneAndUpdate(
    { username: result.username },
    { refreshToken: '' },
    { upsert: true },
    (err, withouttoken) => {
      if (err) {
        reject(err);
      } else {
        resolve(withouttoken);
      }
    },
  );
});

module.exports = { eraseRefreshToken };
