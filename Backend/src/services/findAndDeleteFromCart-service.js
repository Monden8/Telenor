

function findAndDeleteFromCart(cartp, phoneid) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < cartp.length; i++) {
    if (cartp[i]._id == phoneid) {
      return { index: i, list: cartp };
    }
  }
  return null;
}

module.exports = { findAndDeleteFromCart };
