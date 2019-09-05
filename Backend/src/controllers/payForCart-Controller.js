const { cartPriceSum, emptyCart } = require('../services/payForCart-services');

const payForCartController = (req, res) => {
  console.log(req.headers);
  const refreshToken = req.headers.authorization.slice(7);

  cartPriceSum(refreshToken)
    .then(data => emptyCart(data, refreshToken))
    .then((data) => { res.status(200).json({ sumToPay: data }); })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};

module.exports = { payForCartController };
