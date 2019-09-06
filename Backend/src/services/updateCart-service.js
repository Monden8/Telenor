const User = require('../models/register.model');

const updateCart = (rtp, newcart) => new Promise((resolve, reject) => {
  User.findOneAndUpdate(
    { refreshToken: rtp },
    { cart: newcart },
    { upsert: true },
    (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.cart);
      }
    },
  );
});

module.exports = { updateCart };
