const { findCart } = require('../services/usercart');
const { findAndDeleteFromCart } = require('../services/findAndDeleteFromCart-service');
const { spliceCart } = require('../services/splicecart-service');
const { updateCart } = require('../services/updateCart-service');


const deleteFromCart = (req, res) => {
  console.log(req.headers)
  const rt = req.headers["authorization"].slice(7);
  const phoneIndex = req.body.index;

  findCart(rt)
    .then(cart => findAndDeleteFromCart(cart, phoneIndex))
    //.then(indexPlusList => spliceCart(indexPlusList))
    .then(newcart => updateCart(rt, newcart))
    .then((data) => { res.status(200).json(data); })
    .catch((err) => {
      res.status(400).json({ status: 'error', message: err.message });
    });
};

module.exports = { deleteFromCart };
