const User = require('../models/register.model');


function spliceCart(indexPlusList) {
  const whereto = indexPlusList.index;  
  const cart = indexPlusList.list;

  cart.splice(whereto, 1);
  return cart;
}

module.exports = { spliceCart };
