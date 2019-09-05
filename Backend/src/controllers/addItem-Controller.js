const addItems = require('../services/addItems');

const addItemsController = (req, res) => {
  addItems.addNewPhone()
    .then(data => res.json(data))
    .catch((err) => {
      res.status(400).json({ status: 'error', message: err.message });
    });
};

module.exports = { addItemsController };
