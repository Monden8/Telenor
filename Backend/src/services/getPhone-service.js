const Items = require('../models/items.model');

const getPhone = phoneId => new Promise((resolve, reject) => {
  Items.find({ _id: phoneId }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data[0]);
    }
  });
});

module.exports = { getPhone };
