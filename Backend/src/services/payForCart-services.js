const User = require('../models/register.model');
const jwt = require('jsonwebtoken');


const cartPriceSum = refreshToken => new Promise((resolve, reject) => {
  const decoded = jwt.decode(refreshToken);
  User.aggregate([
    {
      $project: {
        _id: 0,
        username: 1,
        totalPrice: { $cond: { if: { username: decoded.username }, then: { $sum: '$cart.price' }, else: 'NA' } },
      },
    },
  ], (err, data) => {
    if (err || data.length <= 0) {
      reject(new Error('Database error.'));
    } else {
      const finalPrice = data.filter(item => item.totalPrice > 0);
      if (finalPrice.length <= 0) {
        console.log(data)
        reject(new Error('Database error.'));
      } else {
        resolve(finalPrice[0].totalPrice);
      }
    }
  });
});


const emptyCart = (price, refreshToken) => new Promise((resolve, reject) => {
  const decoded = jwt.decode(refreshToken);


  User.findOneAndUpdate({ username: decoded.username },
    { $set: { cart: [] } },
    { new: true },
    (err, data) => {
      if (err || data <= 0) {
        reject(err);
      } else {
        resolve(price);
      }
    });
});


module.exports = {
  cartPriceSum,
  emptyCart,
};
