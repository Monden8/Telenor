const Items = require('../models/items.model');

const getAllItems = () => new Promise((resolve, reject) => {
  Items.find({}, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports = { getAllItems };
