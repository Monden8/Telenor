const findAndDeleteFromCart = (singleCart, indexNumber) => new Promise((resolve, reject) => {
  console.log(indexNumber);
  const oldCart = singleCart.cart;
  if (indexNumber < 0) {
    reject(new Error('No such item exsist.'));
  } else {
    oldCart.splice(indexNumber, 1);
    resolve(oldCart);
  }
});


module.exports = { findAndDeleteFromCart };
