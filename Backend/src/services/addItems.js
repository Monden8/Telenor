const Items = require('../models/items.model');

const addNewPhone = () => new Promise((resolve, reject) => {
  const newItem = new Items({
    brand: 'Samsung',
    type: 'Galaxy',
    serie: '9',
    colour: 'black',
    opsystem: 'Android',
    dualsim: false,
    simplesim: true,
    memory: '128GB',
    details: 'Something',
    price: 100000,
    quantity: 2,
    img: 'https://green-fox-academy.slack.com/files/UHDJ7U9N3/FMQAPU2MR/apple_iphone_8_feh__r1.jpg',
  });
  console.log(newItem);

  newItem.save((err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  });
});

module.exports = { addNewPhone };
