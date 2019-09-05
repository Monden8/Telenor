const { findCart } = require('../services/usercart');

const getCart = (req, res) => {
  const rt = req.headers["authorization"].slice(7);

  findCart(rt)
    .then((data) => { res.status(200).json(data); })
    .catch((err) => {
      if (err.errors) {
        res.status(400).json({ status: 'error', message: err.message });
      }
    });
};

module.exports = { getCart };
