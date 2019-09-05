const { findGivenItem, AddToCart } = require('../services/cartServices/findGivenItem');

const addToCartController = (req, res) => {
  const { id } = req.body;
  const refreshToken = req.headers["authorization"].slice(7);
  findGivenItem(id)
    .then(data => AddToCart(data, refreshToken))
    .then(selectedItem => res.status(200).json(selectedItem));
};

module.exports = {
  addToCartController,
};
