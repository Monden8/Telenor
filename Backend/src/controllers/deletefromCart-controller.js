const { findCart } = require('../services/usercart');
const { findAndDeleteFromCart } = require('../services/findAndDeleteFromCart-service');
const { spliceCart } = require('../services/splicecart-service');
const { updateCart } = require('../services/updateCart-service');


const deleteFromCart = (req, res) => {
  const rt = req.headers["authorization"].slice(7);
  const phoneid = req.body.id;

  findCart(rt)
    .then(cart => findAndDeleteFromCart(cart, phoneid))
    .then(indexPlusList => spliceCart(indexPlusList))
    .then(newcart => updateCart(rt, newcart))
    .then((data) => { res.status(200).json(data); })
    .catch((err) => {
      if (err.errors) {
        res.status(400).json({ status: 'error', message: err.message });
      }
    });
};

module.exports = { deleteFromCart };
