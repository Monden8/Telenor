const findAndDeleteFromCart = (cart, indexNumber) => new Promise((resolve, reject) => {
  if (indexNumber !== 0) {
    resolve(cart.splice(indexNumber - 1, 1));
  } else if (indexNumber < 0 || !indexNumber) {
    reject(new Error('No such item exsist.'));
  } else {
    resolve(cart.splice(indexNumber, 1));
  }
});


module.exports = { findAndDeleteFromCart };
