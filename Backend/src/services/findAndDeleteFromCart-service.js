const findAndDeleteFromCart = (singleCart, indexNumber) => new Promise((resolve, reject) => {
  const oldCart = singleCart.cart
  if (indexNumber !== 0) {
    resolve(singleCart.cart.splice(indexNumber - 1, 1));
  } else if (indexNumber < 0 || !indexNumber) {
    reject(new Error('No such item exsist.'));
  } else {
    resolve(singleCart.cart.splice(indexNumber, 1));
  }
});


module.exports = { findAndDeleteFromCart };
